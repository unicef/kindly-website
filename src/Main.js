import React, {useEffect, useState, useRef} from "react";
import {HashLink} from "react-router-hash-link";
import {Accordion, Button, Collapse, Card} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import KindlyForm from "./components/KindlyForm";
import Footer from "./components/Footer";
import IconArrowDownWhite from "./img/icon-arrow-down-white.svg";
import IconArrowDownBlue from "./img/icon-arrow-down-blue.svg";
import IconSend from "./img/icon-send.svg";
import UNICEFLogo from "./img/unicef-logo.png";
import checkWithKindly from "./img/check-with-kindly.svg";
import checkMessage from "./img/check-message.svg";
import sendFinalMsg from "./img/send-final-message.svg";
import viewFeedback from "./img/view-feedback.svg";
import privacy from "./img/kindly-privacy.svg";
import openSource from "./img/kindly-open-source.svg";
import empower from "./img/kindly-empowerment.svg";

import IconMsgGood from "./img/icon-msg-good.svg";
import IconMsgBad from "./img/icon-msg-bad.svg";

function Message(props) {
  let roundCorners = "";
  let borderColor = "";
  if (!props.feedback) {
    roundCorners = "roundBottomCorners";
  } else {
    if (props.toxic) {
      borderColor = "cornerOrange";
    } else {
      borderColor = "cornerGreen";
    }
  }

  return (
    <Card
      className={
        "cover-rectangle " + roundCorners + " " + borderColor + " " + props.addClasses
      }
      style={{
        top: props.top,
        left: props.left,
        zIndex: props.zindex,
      }}
    >
      <Card.Header>
        <table>
          <tbody>
            <tr>
              <td className="cover-text">{props.text}</td>
              <td className="align-bottom">
                <img src={IconSend} className="Iconsend" alt="Inactive Submit Button" />
              </td>
            </tr>
          </tbody>
        </table>
      </Card.Header>
      <Collapse in={props.feedback}>
        {props.toxic ? (
          <Card.Body className="msgBad">
            <table>
              <tbody>
                <tr>
                  <td className="pr-2">
                    <img
                      src={IconMsgBad}
                      alt="Bad Message"
                      width="50"
                      style={{marginRight: ".6em"}}
                    />
                  </td>
                  <td className="text-start align-top">
                    Hmm … maybe
                    <br />
                    reconsider this
                    <br />
                    message?
                  </td>
                </tr>
              </tbody>
            </table>
          </Card.Body>
        ) : (
          <Card.Body className="msgGood">
            <table>
              <tbody>
                <tr>
                  <td>
                    <img
                      src={IconMsgGood}
                      alt="Good Message"
                      width="50"
                      style={{marginRight: ".6em"}}
                    />
                  </td>
                  <td className="text-start align-top">
                    Your message
                    <br />
                    looks great!
                    <br />
                    Good to send!
                  </td>
                </tr>
              </tbody>
            </table>
          </Card.Body>
        )}
      </Collapse>
    </Card>
  );
}

const OriginalColors = {
  background: "background-blue",
  title: "text-white",
  margin: "whiteMargin",
  text: "text-blue",
  arrowDown: IconArrowDownWhite,
};

const KindlyColors = {
  background: "background-light-blue",
  title: "text-blue",
  margin: "blueMargin",
  text: "text-white",
  arrowDown: IconArrowDownBlue,
};

function Main() {
  const [radioState, setRadioState] = useState(1);
  const [colors, setColors] = useState(OriginalColors);
  const [cssProperties, setCssProperties] = useState({});
  const [dimensions, setDimensions] = useState({
    width: undefined,
    height: undefined,
    top: undefined,
    left: undefined,
  });
  const ref = useRef(null);

  function handleRadioButton(value) {
    setRadioState(value);
    if (value) {
      setColors(OriginalColors);
      setCssProperties({
        "--original-bg-color": "#fff",
        "--original-color": "#1955d5",
      });
    } else {
      setColors(KindlyColors);
      setCssProperties({
        "--original-bg-color": "#1955d5",
        "--original-color": "#fff",
      });
    }
  }

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Use referenced node to base calculations
      let node = window.getComputedStyle(ref.current);
      setDimensions({
        width: parseInt(ref.current.clientWidth),
        height: parseInt(ref.current.clientHeight),
        top: parseInt(node.getPropertyValue("margin-top")),
        left: parseInt(node.getPropertyValue("margin-left")),
      });

      console.log(ref.current.clientWidth);
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return (
    <main>
      <div
        className={
          "cover-container d-flex w-100 vh-100 p-3 mx-auto flex-column text-center " +
          colors["background"]
        }
      >
        <div className="cover-cover mx-auto mt-auto" ref={ref}>
          <div className={"cover-title " + colors["title"]}>
            See how messages can
            <br />
            be rethought, Kindly
          </div>
          <div className={"buttonWrapper mt-3 mx-auto " + colors["margin"]}>
            <input
              type="radio"
              className="btn-check"
              name="options-outlined"
              id="success-outlined"
              autoComplete="off"
              checked={radioState}
              onChange={() => handleRadioButton(1)}
            />
            <label
              className={"btn btn-outline-light btn-original"}
              htmlFor="success-outlined"
              style={cssProperties}
            >
              ORIGINAL MESSAGE
            </label>
            &nbsp;&nbsp;&nbsp;
            <input
              type="radio"
              className="btn-check btn-kindly"
              name="options-outlined"
              id="danger-outlined"
              autoComplete="off"
              checked={!radioState}
              onChange={() => handleRadioButton(0)}
            />
            <label
              className={"btn btn-outline-light btn-kindly"}
              htmlFor="danger-outlined"
            >
              APPLY KINDLY
            </label>
          </div>
        </div>

        <footer className="cover-footer mt-auto">
          <HashLink to="#about" className={"text-decoration-none " + colors["title"]}>
            <span>Learn about Kindly</span>
            <br />
            <img
              src={radioState ? IconArrowDownWhite : IconArrowDownBlue}
              className="icon-arrow-down"
              alt="Downward Arrow"
            />
          </HashLink>
        </footer>

        <div className="background container-fluid vh-100">
          <Message
            text={<span>ur&nbsp;so&nbsp;ugly</span>}
            feedback={!radioState}
            toxic={true}
            top={dimensions["top"] / 2 - 60 + "px"}
            left={dimensions["left"] - 10 + "px"}
          />

          <Message
            text={
              <span>
                omg&nbsp;did&nbsp;you&nbsp;see&nbsp;what
                <br />
                they&nbsp;did&nbsp;yesterday?!
                <br />
                what&nbsp;idiots
              </span>
            }
            feedback={!radioState}
            toxic={true}
            top={dimensions["top"] * 1.2 + dimensions["height"] + "px"}
            left={dimensions["left"] + "px"}
          />

          <Message
            text={<span>Cool!&nbsp;See&nbsp;you&nbsp;there!</span>}
            feedback={!radioState}
            toxic={false}
            top={dimensions["top"] + 20 + "px"}
            left={dimensions["left"] / 1.8 - 120 + "px"}
            addClasses="d-none d-md-block"
          />

          <Message
            text={
              <span>
                umm&nbsp;yeah&nbsp;I&nbsp;think
                <br />
                that&nbsp;will&nbsp;be&nbsp;okay
              </span>
            }
            feedback={!radioState}
            toxic={false}
            top={dimensions["top"] + dimensions["height"] + 40 + "px"}
            left={dimensions["left"] + dimensions["width"] - 140 + "px"}
          />

          <Message
            text={<span>No&nbsp;that&apos;s&nbsp;so&nbsp;dumb</span>}
            feedback={!radioState}
            toxic={true}
            top={dimensions["top"] + dimensions["height"] - 60 + "px"}
            left={dimensions["left"] + dimensions["width"] + "px"}
            zindex={10}
            addClasses="d-none d-md-block"
          />

          <Message
            text={
              <span>
                Yesterday&apos;s&nbsp;movie&nbsp;was
                <br />
                great&nbsp;I&nbsp;liked&nbsp;it,&nbsp;but&nbsp;not
                <br />
                the&nbsp;scary&nbsp;parts.&nbsp;Those
                <br />
                just&nbsp;freak&nbsp;me&nbsp;out
              </span>
            }
            feedback={!radioState}
            toxic={false}
            top={dimensions["top"] / 1.7 - 80 + "px"}
            left={dimensions["left"] * 1.5 + dimensions["width"] - 200 + "px"}
          />
        </div>
      </div>

      <div className="p-5 cover-unicef" id="about">
        <div className="container-lg">
          <div className="row align-items-center g-5 py-5">
            <div className="col-lg-5 offset-lg-1">
              <img
                src={UNICEFLogo}
                width="490"
                alt="UNICEF Logo"
                className="d-block mx-auto img-fluid"
                loading="lazy"
              />
            </div>
            <div className="col-lg-3 offset-lg-2">
              <p className="lead text-lg-start text-center">
                Kindly is the product of a collaboration between UNICEF and Gitanjali Rao,
                a young innovator.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-4">
        <div className="container-lg p-5">
          <div className="row align-items-center g-5 py-5 flex-row-reverse">
            <div className="col-lg-5">
              <img src={checkWithKindly} alt="Check With Kindly" className="w-100" />
            </div>
            <div className="col-lg-5 offset-1">
              <h1>
                Kindly is an API that uses Machine Learning to identify &apos;toxic&apos;
                messages.
              </h1>
              <p style={{fontSize: "1.2em"}}>
                Kindly evaluates messages before they are sent and offers users the chance
                to modify them.
              </p>
              <p style={{fontSize: "1.2em"}}>
                Kindly aims to make children feel safer by leveraging the latest advances
                in technology and by empowering children to solve this pressing challenge.
              </p>
            </div>
          </div>
          <footer className="cover-footer mt-auto mx-auto text-center">
            <HashLink to="#test-kindly" className="text-decoration-none text-blue">
              <span>Test Kindly</span>
              <br />
              <img
                src={IconArrowDownBlue}
                className="icon-arrow-down"
                alt="Downward Arrow"
              />
            </HashLink>
          </footer>
        </div>
      </div>

      <div className="py-4 background-blue text-white" id="test-kindly">
        <div className="container-lg">
          <div className="row align-items-center g-5 py-5 mb-5">
            <div className="col-lg-5 offset-lg-1 text-lg-start text-center px-5">
              <h1 className="mb-5">
                Kindly aims to end cyberbullying, one message at a time.
              </h1>
              <p className="lead">Test Kindly for yourself!</p>
              <p>
                Reply to the message and check your entry with Kindly to see if your
                message is toxic or considered cyberbullying.
              </p>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <KindlyForm />
            </div>
          </div>
          <footer className="cover-footer mt-5 mx-auto text-center">
            <HashLink to="#how-kindly-works" className="text-decoration-none text-white">
              <span>How Kindly works</span>
              <br />
              <img
                src={IconArrowDownWhite}
                className="icon-arrow-down"
                alt="Downward Arrow"
              />
            </HashLink>
          </footer>
        </div>
      </div>

      <div className="p-5 background-light-blue text-blue" id="contribute-to-kindly">
        <div className="container-lg">
          <div className="row align-items-center pt-5 pb-3">
            <div className="col-md-8 text-center mx-auto">
              <h1 className="pb-3">Don&apos;t just test, but improve Kindly!</h1>
              <p className="px-2">
                Contribute to Kindly&apos;s understanding of message intent by submitting
                any sentence and flagging if it has a cyberbullying intent or not.
              </p>
              <Button
                variant="outline-light"
                style={{minWidth: "12em"}}
                className="my-3"
                href="/contribute"
              >
                Contribute&nbsp;&nbsp;&gt;
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5" id="how-kindly-works">
        <div className="container-lg">
          <div className="row align-items-center pt-5 pb-3">
            <div className="col-lg-7 text-center mx-auto">
              <h1 className="">
                Think <i>Grammerly</i>,<br /> but for cyberbullying
              </h1>
              <p className="text-grey">
                When integrated with existing text-based platforms, Kindly allows users to
                check and edit their messages for toxic intent.
              </p>
            </div>
          </div>
          <div className="row px-lg-5 pb-5 align-items-start">
            <div className="col-lg-3 text-center mx-auto px-5 mt-4 mt-md-0">
              <img src={checkMessage} alt="Check the message" className="pl-3" />
              <p>
                <b>Check the message</b>
              </p>
              <p>
                Users prompt Kindly to evaluate their message draft for toxic text or
                cyberbullying intent
              </p>
            </div>
            <div className="col-lg-3 text-center mx-auto mt-4 mt-md-0">
              <img src={viewFeedback} alt="View Feedback" />
              <p>
                <b>View feedback</b>
              </p>
              <p>
                Feedback on the message offers users the chance to edit their original
                message
              </p>
            </div>
            <div className="col-lg-3 text-center mx-auto px-5 mt-4 mt-md-0">
              <img src={sendFinalMsg} alt="Send Final Message" className="pr-3" />
              <p>
                <b>Send final message</b>
              </p>
              <p>
                Users choose to send the final message after seeing and/or responding to
                the feedback
              </p>
            </div>
          </div>
          <footer className="cover-footer mt-auto mx-auto text-center">
            <HashLink to="#why-kindly" className="text-decoration-none text-blue">
              <span>Why Kindly?</span>
              <br />
              <img
                src={IconArrowDownBlue}
                className="icon-arrow-down"
                alt="Downward Arrow"
              />
            </HashLink>
          </footer>
        </div>
      </div>

      <div className="p-5 background-black">
        <div className="container-lg">
          <div className="row align-items-center g-5 py-5">
            <div className="col-lg-7 text-center mx-auto text-white text-center">
              <h2>
                One-third of the globe’s youth is bullied. It affects everyone: those who
                are bullied, those who bully others, and those who witness bullying. And
                it doesn’t stop in the physical world. It happens online, too.
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="container-lg p-5" id="why-kindly">
        <div className="row align-items-center g-5 py-5">
          <div className="col-lg-7 text-center mx-auto">
            <h1 className="">
              Kindly is a uniquely qualified solution to eliminate cyberbullying
            </h1>
            <p className="text-grey">
              Partners Gitanjali Rao and UNICEF provide the principles that make Kindly an
              excellent digital tool that empowers children.
            </p>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-4 text-center mx-auto">
            <img
              src={privacy}
              alt="Children's data privacy"
              className="img-fluid px-5 px-md-0"
            />
          </div>
          <div className="col-lg-5 mx-auto">
            <p className="unicef-blue-section-header">
              Protection of childen&apos;s rights and data
            </p>
            <p>
              To take full account of children&apos;s issues and rights online, UNICEF has
              developed a{" "}
              <a
                href="https://www.unicef.org/globalinsight/reports/better-governance-childrens-data-manifesto"
                target="_blank"
                rel="noreferrer"
              >
                Manifesto
              </a>{" "}
              for data governance to protect children’s data and their rights and
              prioritize children’s best interests. Thus, UNICEF is uniquely positioned to
              provide strong child data protection guarantees and offer a trusted digital
              public good that puts children first.
            </p>
          </div>
        </div>

        <div className="row align-items-center px-md-5 flex-row-reverse mt-4">
          <div className="col-lg-4 text-center mx-auto w-80">
            <img
              src={openSource}
              alt="Open-source solution"
              className="img-fluid px-5 px-md-0"
            />
          </div>
          <div className="col-lg-5 mx-auto">
            <p className="unicef-blue-section-header">
              An open-source solution for anyone to contribute to
            </p>
            <p>
              By developing Kindly as an open-source solution, UNICEF encourages and
              empowers children to be part of the solution to a challenge that many of
              them face directly. Kindly provides systems of iterative improvement that
              allow the tool to meet the specific needs of different communities.
            </p>
          </div>
        </div>

        <div className="row align-items-center px-md-5 mt-4">
          <div className="col-lg-4 text-center mx-auto">
            <img
              src={empower}
              alt="Empower anyone to contribute"
              className="img-fluid px-5 px-md-0"
            />
          </div>
          <div className="col-lg-5 mx-auto mt-3">
            <p className="unicef-blue-section-header">
              Engaging children directly in a solution to cyberbullying
            </p>
            <p>
              While similar services to Kindly exist in the market, they do not engage
              children in the way Kindly aims to. Kindly gives children themselves the
              power to eliminate cyberbullying by checking their messages, and centers
              their own safety and protections in the solution.
            </p>
          </div>
        </div>
      </div>

      <div className="container-lg p-5">
        <div className="row align-items-center g-5 py-5">
          <div className="col-lg-7 mx-auto">
            <h2 className="text-lg-start text-center">Frequently Asked Questions</h2>
            <Accordion className="pb-3 pt-4">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  How does Kindly integrate into existing platforms?
                </Accordion.Header>
                <Accordion.Body>
                  Kindly offers a public API that any online service provider can leverage
                  to integrate with their existing product offering. It is as simple as
                  sending any message that the user is typing to that API endpoint, and
                  process the response to provide feedback to the user on whether that
                  user-generated content is fine to post, or the user should reconsider
                  their language before posting. Contact{" "}
                  <a href="mailto:kindly@unicef.org" rel="noreferrer">
                    kindly@unicef.org
                  </a>{" "}
                  with any technical questions around the integration possibilities.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <Accordion className="pb-3">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Who is Kindly made for?</Accordion.Header>
                <Accordion.Body>
                  Kindly was created for children between the ages of 10 and 18 years in
                  an effort to end cyberbullying and make them feel safer. Kindly can be
                  integrated with any platform that provides text-based services (such as
                  chat interface, email platform, etc.) to benefit children, globally.
                  While the current version is available in English, more languages are
                  envisioned in the future.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <Accordion className="pb-3">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  What are Kindly’s child protection and safety policies?
                </Accordion.Header>
                <Accordion.Body>
                  Kindly&apos;s open-source API does not collect any user data. It is
                  supported by UNICEF&apos;s strong{" "}
                  <a
                    href="https://www.unicef.org/supply/documents/policy-conduct-promoting-protection-and-safeguarding-children"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Child Safeguarding
                  </a>{" "}
                  standards that promote the protection and safeguarding of all children.
                  It is also supported by UNICEF’s{" "}
                  <a
                    href="https://www.unicef.org/supply/documents/unicef-policy-personal-data-protection"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Data Protection
                  </a>{" "}
                  standards that ensure that individuals&apos; privacy rights are honored
                  and their data appropriately protected. However, if someone wishes to
                  contribute to the training data set, they can do so through our{" "}
                  <i>Contribute Page</i>. Before being added to the training open data
                  set, the data will be anonymized and reviewed by trusted UNICEF staff to
                  maintain appropriate privacy measures.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <Accordion className="pb-3">
              <Accordion.Item eventKey="0">
                <Accordion.Header>How can I get involved with Kindly?</Accordion.Header>
                <Accordion.Body>
                  We’d love to have you! To keep up with Kindly’s progress and latest
                  developments, access the{" "}
                  <a
                    href="https://github.com/unicef/kindly"
                    target="_blank"
                    rel="noreferrer"
                  >
                    API repository
                  </a>
                  . You can also contact Kindly’s team via email at{" "}
                  <a href="mailto:kindly@unicef.org" target="_blank" rel="noreferrer">
                    kindly@unicef.org
                  </a>
                  .
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <Accordion className="pb-3 pt-4">
              <Accordion.Item eventKey="0">
                <Accordion.Header> What resources are available for me to learn more about cyberbullying and its prevention?</Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>{" "}
                      <a 
                        href=""
                        target="blank"
                        rel="noreferrer"
                      >
                      “Cyberbullying: What is it and how to stop it” by UNICEF
                      </a>
                      </li>
                      <li>Knowledge Platform by The Global Partnership and Fund to End Violence Against Children</li>
                      <li>Fact Sheet on Cyberbullying by UNESCO</li>
                      <li>If you are worried about your safety or something that has happened to you online, urgently speak to an adult you trust. Or visit Child Helpline International to find help in your country.</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>


          </div>
        </div>
      </div>

      <div className="p-5 background-blue text-white">
        <div className="container-lg p-5">
          <div className="row align-items-center g-5 py-5">
            <div className="col-lg-7 mx-auto text-center">
              <h2 className="px-5">Join us in ending cyberbullying!</h2>
            </div>
          </div>
          <div className="row align-items-center g-5 py-5">
            <div className="col-lg-4 mx-auto text-center">
              <p className="lead">Contribute data</p>
              <p>
                Teach Kindly to recognize cyberbullying by submitting text and evaluating
                feedback
              </p>
              <Button
                variant="outline-light"
                style={{minWidth: "12em"}}
                href="/contribute"
              >
                Contribute
              </Button>
            </div>
            <div className="col-lg-4 mx-auto text-center">
              <p className="lead">Stay updated</p>
              <p>
                Keep up with Kindly’s progress by accessing the UNICEF/Kindly software
                repository
              </p>
              <Button
                variant="outline-light"
                style={{minWidth: "12em"}}
                href="https://github.com/unicef/kindly"
                target="_blank"
                rel="noreferrer"
              >
                Software Repository
              </Button>
            </div>
            <div className="col-lg-4 mx-auto text-center pt-5 pt-lg-0">
              <p className="lead">Learn more</p>
              <p>
                Connect with Kindly to learn more about Kindly or to explore a partnership
                role with us
              </p>
              <Button
                variant="outline-light"
                style={{minWidth: "12em"}}
                href="mailto:kindly@unicef.org"
                rel="noreferrer"
              >
                Email us
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

export default Main;
