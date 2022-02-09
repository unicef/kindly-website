import React, {useState, useEffect, useRef} from "react";
import ReactDOM from "react-dom";
import {Button, Card, Form, Spinner} from "react-bootstrap";
import IconMsgGood from "../img/icon-msg-good.svg";
import IconMsgBad from "../img/icon-msg-bad.svg";
import dotenv from "dotenv";

dotenv.config();

const KINDLY_URL = process.env.REACT_APP_KINDLY_URL
  ? process.env.REACT_APP_KINDLY_URL
  : "http://localhost:8080/detect";

const SCRIPT_URL = process.env.REACT_APP_SCRIPT_URL;

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

function KindlyForm(props) {
  const [inputText, setInputText] = useState();
  const [prompts, setPrompts] = useState(randomizePrompt());
  const [rowNumber, setRowNumber] = useState(2);
  const refRow = useRef(rowNumber);
  const refDiv = useRef(null);

  // There is a problem with stale values in the state,
  // if done in the usual way. Need to use references to overcome it
  // See: https://stackoverflow.com/a/55156813/5354742
  useEffect(() => {
    refRow.current = rowNumber;
  }, [rowNumber]);

  // Send resize message to parent when this page is embedded
  // into a parent website via an iframe
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      window.parent.postMessage(
        {
          width: refDiv.current.clientWidth,
          height: refDiv.current.clientHeight,
        },
        "*"
      );
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  const handleFeedback = (e, value) => {
    e.preventDefault();
    const kindlyStatus = document.getElementById("kindly-status");
    ReactDOM.render(waitStatus, kindlyStatus);
    kindlyStatus.style.backgroundColor = "grey";

    let formData = new FormData();
    formData.append("text", inputText);
    formData.append("intent", value);
    formData.append("row", refRow.current);

    fetch(SCRIPT_URL, {method: "POST", body: formData})
      .then(async (response) => {
        const r = await response.json();
        if (r["result"] === "error") {
          console.log("Something went wrong");
          console.log(r["error"]);
        }
        setInputText("");
        const kindlyStatus = document.getElementById("kindly-status");
        ReactDOM.render(thankyouStatus, kindlyStatus);
      })
      .catch(async (error) => {
        console.log("Something went wrong");
        console.log(error);
      });
  };

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
          <td className="px-3" rowSpan="2">
            <img src={IconMsgGood} alt="Good Message" width="80" />
          </td>
          {props.contribute ? (
            <td className="text-start align-top">No cyberbulling intent detected</td>
          ) : (
            <td className="text-start align-top">
              Your message looks great!
              <br />
              Good to send!
            </td>
          )}
        </tr>
        {props.contribute && (
          <tr>
            <td className="text-start align-top">
              <span style={{fontSize: "0.9em"}}>DO YOU AGREE?</span>
              <Button
                variant="outline-light"
                className="btn-small ml-3"
                style={{boxShadow: "none", float: "right"}}
                onClick={(e) => handleFeedback(e, "no")}
              >
                NO
              </Button>
              <Button
                variant="outline-light"
                className="btn-small mx-3"
                style={{boxShadow: "none", float: "right"}}
                onClick={(e) => handleFeedback(e, "yes")}
              >
                YES
              </Button>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );

  const badStatus = (
    <table>
      <tbody>
        <tr>
          <td className="px-3" rowSpan="2">
            <img src={IconMsgBad} alt="Bad Message" width="80" />
          </td>
          {props.contribute ? (
            <td className="text-start align-top">Cyberbullying intent detected</td>
          ) : (
            <td className="text-start align-top">Hmm … maybe reconsider this message?</td>
          )}
        </tr>
        {props.contribute && (
          <tr>
            <td className="text-start align-top">
              <span style={{fontSize: "0.9em"}}>DO YOU AGREE?</span>
              <Button
                variant="outline-light"
                className="btn-small ml-3"
                style={{boxShadow: "none", float: "right"}}
                onClick={(e) => handleFeedback(e, "no")}
              >
                NO
              </Button>
              <Button
                variant="outline-light"
                className="btn-small mx-3"
                style={{boxShadow: "none", float: "right"}}
                onClick={(e) => handleFeedback(e, "yes")}
              >
                YES
              </Button>
            </td>
          </tr>
        )}
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

  const thankyouStatus = (
    <table style={{height: "80px"}} className="w-100">
      <tbody>
        <tr>
          <td className="align-middle text-center">
            Thank you, your contribution has been recorded.
            <br />
            Do you want to contribute again?
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

    if (props.contribute) {
      let formData = new FormData();
      formData.append("text", inputText);

      fetch(SCRIPT_URL, {method: "POST", body: formData})
        .then(async (response) => {
          const r = await response.json();
          const updatedRow = parseInt(r.row);
          setRowNumber(updatedRow);
          if (r["result"] === "error") {
            console.log("Something went wrong");
            console.log(r["error"]);
          }
        })
        .catch(async (error) => {
          console.log("Something went wrong");
          console.log(error);
        });
    }

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
    <div ref={refDiv}>
      <Card>
        <Card.Header className="text-blue p-4">
          <table className="w-100">
            <tbody>
              <tr>
                <td>
                  <b>
                    {props.contribute ? "Contribute to Kindly" : "Kindly Test Message"}
                  </b>
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
              <div className="chat-bubble w-75 text-start" key={index}>
                {element}
              </div>
            ))}
          <Form.Group className="" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              placeholder="How would you respond? Type here*"
              rows={3}
              className="shadow-none p-3 mt-4"
              style={{
                borderRadius: "20px 20px 0 0",
                resize: "none",
                border: 0,
              }}
              value={inputText}
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
      {!props.contribute && (
        <div style={{fontStyle: "italic", marginTop: "0.6em", fontSize: "0.85em"}}>
          * Please do not enter personally identifiable information.
          <br />
          &nbsp;&nbsp;This form does not store any data.
        </div>
      )}
      <div id="kindly-status" className="text-white">
        {waitStatus}
      </div>
    </div>
  );
}

export default KindlyForm;
