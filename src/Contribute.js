import { HashLink } from "react-router-hash-link";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import KindlyForm from './components/KindlyForm';
import Footer from './components/Footer';
import IconArrowDownBlue from './img/icon-arrow-down-blue.svg';
import IconArrowLeftLightblue from './img/icon-arrow-left-lightblue.svg';
import sendFinalMsg from './img/send-final-message.svg';
import goodInteraction from './img/good-interaction.svg';

function Contribute() {

  return (
    <main>
      <div className='text-center background-light-blue text-blue'>
        <div className="cover-cover mx-auto mt-auto row g-5"> {/*align-items-center g-5 py-5 mb-5"*/}
          <div className="col-lg-5 offset-lg-1 text-lg-start text-center px-5">
            <div className="pb-3">
              <a href="/" className="nav-link-kindly">
                <img src={IconArrowLeftLightblue} className="icon-arrow-down" alt="Downward Arrow"/>
                &nbsp;&nbsp;Learn about Kindly
              </a>
            </div>
            <h1 className="my-5">Improve Kindly by contributing to the training dataset</h1>  
            <p className="lead">After testing a string of text with Kindly, indicate if your entry contained cyberbullying or toxic intent. This will help improve Kindly's understanding.</p>
            <div className="mt-5" style={{fontStyle: "italic", fontSize: "0.9em"}}>
              <b>Please note:</b> Anything typed and tested in the message box will be collected, reviewed, and added to Kindly's public data set. Do not enter personally identifiable information.
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <KindlyForm contribute={true}/>
          </div>
        </div>
        <footer className="cover-footer mt-5 mx-auto text-center pb-4">
          <HashLink to="#why-contribute" className="text-decoration-none">
            <span>Why contribute?</span><br/>
            <img src={IconArrowDownBlue} className="icon-arrow-down" alt="Downward Arrow"/>
          </HashLink>
        </footer>
      </div>

      <div className="p-5" id="why-contribute">
        <div className="container-lg">
          <div className="row align-items-center pt-5 pb-3">
            <div className="col-lg-7 text-center mx-auto">
              <img
                src={goodInteraction}
                alt="Send Final Message"
                className="pr-3"/>
              <h3>Inspire improved online interactions</h3>  
              <p>Messages that are sent between Kindly’s users will contain less cyberbullying
              because of your contributions, which improve Kindly’s data and its ability to
              provide feedback.</p>
            </div>
          </div>

          <div className="row align-items-center pt-5 pb-3">
            <div className="col-lg-7 text-center mx-auto">
              <img
                src={sendFinalMsg}
                alt="Send Final Message"
                className="pr-3"/>
              <h3>Be part of the solution to cyberbullying</h3>  
              <p>Kindly is a proactive solution to the pressing issue of cyberbullying. You
              can help train and improve this tool that will stop toxic messages before they
              are sent.</p>
            </div>
          </div> 
        </div>
      </div>

      <Footer />

    </main>
  );
}

export default Contribute;
