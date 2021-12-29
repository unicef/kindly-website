import {HashLink} from "react-router-hash-link";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import KindlyForm from "./components/KindlyForm";
import Footer from "./components/Footer";
import IconArrowDownBlue from "./img/icon-arrow-down-blue.svg";
import IconArrowLeftLightblue from "./img/icon-arrow-left-lightblue.svg";
import sendFinalMsg from "./img/send-final-message.svg";
import goodInteraction from "./img/good-interaction.svg";

function Contribute() {
  return (
    <main>
      <div className="text-center background-light-blue text-blue">
        <div className="cover-cover mx-auto mt-auto row g-5">
          {" "}
          {/*align-items-center g-5 py-5 mb-5"*/}
          <div className="col-lg-5 offset-lg-1 text-lg-start text-center px-5">
            <div className="pb-3">
              <a href="/" className="nav-link-kindly">
                <img
                  src={IconArrowLeftLightblue}
                  className="icon-arrow-down"
                  alt="Downward Arrow"
                />
                &nbsp;&nbsp;Learn about Kindly
              </a>
            </div>
            <h1 className="my-5">
              Improve Kindly by contributing to the training dataset
            </h1>
            <p className="lead">
              After testing a string of text with Kindly, indicate if your entry contained
              cyberbullying or toxic intent. This will help improve Kindly&apos;s
              understanding.
            </p>
            <div className="mt-5" style={{fontSize: "0.95em"}}>
              <p>
                Thank you for helping us build and improve the machine learning model that
                will power Kindly.
              </p>
              <p>
                Taking care of your information is important to us, and we ask you{" "}
                <b>not</b> to provide any personal data in the message box.
              </p>
              <p>
                Personal data means any information that lets us identify you or the
                device you use including your name, address, phone number, email address,
                identification number (for you or your device), location data, or any
                attribute that may be linked to you as an individual. We ask you{" "}
                <b>not</b> to include any such data related to yourself or others in your
                message.
              </p>
              <p>
                The data you submit through the message box will be stored awaiting human
                review. If your message includes any personal data, our team will safely
                remove and destroy it prior to including your submission in the data set.
              </p>
              <p>
                If you are under 13 years old, you should make sure you have the
                permission of your parents or guardian prior to giving us any information.
                Moreover, we would encourage anyone under 18 to discuss their
                participation with their parents or guardian.
              </p>
              <p>
                If you have any questions concerns about how we will use your data, please
                contact us at <a href="mailto:kindly@unicef.org">kindly@unicef.org</a>
              </p>
            </div>
          </div>
          <div className="col-lg-5">
            <KindlyForm contribute={true} />
            <div>
              <div>
                <h3>How many contributions:</h3>
                <p></p>
              </div>
            </div>
          </div>
        </div>
        <footer className="cover-footer mt-5 mx-auto text-center pb-4">
          <HashLink to="#why-contribute" className="text-decoration-none">
            <span>Why contribute?</span>
            <br />
            <img
              src={IconArrowDownBlue}
              className="icon-arrow-down"
              alt="Downward Arrow"
            />
          </HashLink>
        </footer>
      </div>

      <div className="p-5" id="why-contribute">
        <div className="container-lg">
          <div className="row align-items-center pt-5 pb-3">
            <div className="col-lg-7 text-center mx-auto">
              <img src={goodInteraction} alt="Send Final Message" className="pr-3" />
              <h3>Inspire improved online interactions</h3>
              <p>
                Messages that are sent between Kindly’s users will contain less
                cyberbullying because of your contributions, which improve Kindly’s data
                and its ability to provide feedback.
              </p>
            </div>
          </div>

          <div className="row align-items-center pt-5 pb-3">
            <div className="col-lg-7 text-center mx-auto">
              <img src={sendFinalMsg} alt="Send Final Message" className="pr-3" />
              <h3>Be part of the solution to cyberbullying</h3>
              <p>
                Kindly is a proactive solution to the pressing issue of cyberbullying. You
                can help train and improve this tool that will stop toxic messages before
                they are sent.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

export default Contribute;
