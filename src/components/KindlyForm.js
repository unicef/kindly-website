import React, {useState} from "react";
import ReactDOM from "react-dom";

import {Button, Card, Form, Spinner} from "react-bootstrap";
import IconMsgGood from "../img/icon-msg-good.svg";
import IconMsgBad from "../img/icon-msg-bad.svg";

const KINDLY_URL = process.env.REACT_APP_KINDLY_URL
  ? process.env.REACT_APP_KINDLY_URL
  : "http://localhost:8080/detect";

const PROMPTS = [
  [
    "I thought the movie was great. I liked it, but not the scary parts. Those freaked me out.",
    "What did you think?",
  ],
  ["Should we meet at the library?", " Does that sound okay?"],
  ["Was the presentation okay?", "I couldn't tell..."],
  ["I don't really have friends yet and I don't know why."],
  ["omg did you see what he was wearing today?", "wasn't it ugly?!"],
  [
    "that weirdo from the party last week is here. she's so stupid.",
    "I mean, who even likes her?",
  ],
];

const randomizePrompt = () => {
  return PROMPTS[Math.floor(Math.random() * PROMPTS.length)];
};

function KindlyForm() {
  const [inputText, setInputText] = useState();
  const [prompts, setPrompts] = useState(randomizePrompt());

  const waitStatus = (
    <table style={{height: "80px"}} className="w-100">
      <tbody>
        <tr>
          <td className="align-middle text-center">
            <Spinner animation="border" variant="light" size="sm" />
            &nbsp;&nbsp; Results loading … hang tight!
          </td>
        </tr>
      </tbody>
    </table>
  );

  const goodStatus = (
    <table>
      <tbody>
        <tr>
          <td className="px-3">
            <img src={IconMsgGood} alt="Good Message" width="80" />
          </td>
          <td className="text-start align-top">
            Your message looks great! Good to send!
          </td>
        </tr>
      </tbody>
    </table>
  );

  const badStatus = (
    <table>
      <tbody>
        <tr>
          <td className="px-3">
            <img src={IconMsgBad} alt="Bad Message" width="80" />
          </td>
          <td className="text-start align-top">Hmm … maybe reconsider this message?</td>
        </tr>
      </tbody>
    </table>
  );

  const errorStatus = (
    <table style={{height: "80px"}} className="w-100">
      <tbody>
        <tr>
          <td className="align-middle text-center">
            An error occurred.
            <br />
            Try again later.
          </td>
        </tr>
      </tbody>
    </table>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const kindlyStatus = document.getElementById("kindly-status");
    ReactDOM.render(waitStatus, kindlyStatus);
    kindlyStatus.style.backgroundColor = "#000";
    kindlyStatus.style.visibility = "visible";

    fetch(KINDLY_URL, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        // 'Authorization': 'Bearer YOUR-TOKEN-GOES-HERE'
      },
      body: JSON.stringify({text: inputText}),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);

        if (
          parseFloat(data.result["offensive"]) > parseFloat(data.result["not-offensive"])
        ) {
          ReactDOM.render(badStatus, kindlyStatus);
          kindlyStatus.style.backgroundColor = "#ff9f40";
        } else {
          ReactDOM.render(goodStatus, kindlyStatus);
          kindlyStatus.style.backgroundColor = "#46c66d";
        }
      })
      .catch((error) => {
        ReactDOM.render(errorStatus, kindlyStatus);
        kindlyStatus.style.backgroundColor = "#880808";
        console.error("Error:", error);
      });
  };

  const handleGenerate = () => {
    setPrompts(randomizePrompt());
  };

  return (
    <div>
      <Card>
        <Card.Header className="text-blue p-4">
          <table className="w-100">
            <tbody>
              <tr>
                <td>
                  <b>Kindly Test Message</b>
                </td>
                <td className="text-end">
                  <Button
                    variant="outline-primary"
                    className="btn-small"
                    style={{boxShadow: "none"}}
                    onClick={handleGenerate}
                  >
                    GENERATE NEW
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </Card.Header>
        <Card.Body className="p-4">
          {prompts &&
            prompts.map((element, index) => (
              <div className="chat-bubble w-75" key={index}>
                {element}
              </div>
            ))}
          <Form.Group className="" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              placeholder="How would you respond? Type here."
              rows={3}
              className="shadow-none p-3 mt-4"
              style={{
                borderRadius: "20px 20px 0 0",
                resize: "none",
                border: 0,
              }}
              onChange={(e) => setInputText(e.target.value)}
            />
          </Form.Group>
          <div
            className="text-end"
            style={{
              backgroundColor: "#fff",
              borderRadius: "0 0 20px 20px",
              padding: ".5rem",
            }}
          >
            <Button
              variant="primary"
              className="btn-small"
              style={{marginTop: 0}}
              onClick={handleSubmit}
            >
              Check with Kindly
            </Button>
          </div>
        </Card.Body>
      </Card>
      <div id="kindly-status" className="text-white">
        {waitStatus}
      </div>
    </div>
  );
}

export default KindlyForm;
