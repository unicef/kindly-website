import {HashLink as Link} from "react-router-hash-link";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import IconArrowDownWhite from './img/icon-arrow-down-white.svg';
import IconArrowDownBlue from './img/icon-arrow-down-blue.svg';
import IconSend from './img/icon-send.svg';
import UNICEFLogo from './img/unicef-logo.png';

function Message(props){
  return(
      <div className="cover-rectangle">
        <table>
          <tbody>
            <tr>
              <td className="cover-text">{props.text}</td>
              <td className="align-bottom"><img src={IconSend} className="Iconsend" alt="Inactive Submit Button"/></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}


function App() {
  return (
    <main>
      <div className="cover-container d-flex w-100 vh-100 p-3 mx-auto flex-column text-center background-blue">
        <div className="cover-cover text-center mt-auto">
          <div className="cover-title">
            See how messages can<br />
            be rethought, Kindly
          </div>
        </div>

        <footer className="cover-footer mt-auto">
          <Link to="#about" className="text-decoration-none text-white">
            <span>Learn about Kindly</span><br/>
            <img src={IconArrowDownWhite} className="icon-arrow-down" alt="Downward Arrow"/>
          </Link>
        </footer>

        <div className="background container-fluid vh-100">
          <div className="row mt-5">
            <div className="col-2 offset-3">
              <Message text={<span>ur&nbsp;so&nbsp;ugly</span>} />
            </div>
            <div className="col-4 offset-3">
              <Message text={<span>
                      omg&nbsp;did&nbsp;you&nbsp;see&nbsp;what<br/>
                      they&nbsp;did&nbsp;yesterday?!<br/>
                      what&nbsp;idiots</span>}/>
            </div>
          </div>
          <div className="row">
            <div className="col-3 offset-1">
              <Message text={<span>Cool!&nbsp;See&nbsp;you&nbsp;there!</span>} />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <p>&nbsp;</p>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
            </div>
          </div>

          <div className="row">
            <div className="col-3 offset-9">
              <Message text={<span>No&nbsp;that's&nbsp;so&nbsp;dumb</span>} />
            </div>
          </div>

          <div className="row">
            <div className="col-3 offset-2">
              <Message text={<span>The&nbsp;Moana&nbsp;movie&nbsp;is<br />
                great&nbsp;I&nbsp;liked&nbsp;it,&nbsp;but&nbsp;not<br/>
                the&nbsp;scary&nbsp;parts.&nbsp;Those<br/>
                just&nbsp;freak&nbsp;me&nbsp;out</span>} />
            </div>
          </div>

          <div className="row">
            <div className="col-3 offset-8">
              <Message text={<span>umm&nbsp;yeah&nbsp;I&nbsp;think<br/>
                that&nbsp;will&nbsp;be&nbsp;okay</span>} />
            </div>
          </div>

        </div>
      </div>

      <div className="px-4 p-5 border-bottom cover-unicef" id="about">
        <div className="row align-items-center g-5 py-5">
          <div className="col-lg-5 offset-1">
            <img src={UNICEFLogo} width="490" alt="UNICEF Logo" className="d-block mx-lg-auto img-fluid" loading="lazy"/>
          </div>
          <div className="col-lg-3 offset-2">
            <p className="lead text-left">Kindly is the product of a collaboration between UNICEF and Gitanjali Rao, a young innovator.</p>
          </div>
        </div>
      </div>

      <div className="px-4 p-5 border-bottom">
        <div className="row align-items-center g-5 py-5">
          <div className="col-lg-5 offset-1">
            <h1 className="">Kindly is an API that uses Machine Learning to identify 'toxic' messages.</h1>  
            <p className="lead">Kindly evaluates messages before they are sent and offers users the chance to modify them.</p>
            <p className="lead">Kindly aims to make children feel safer by leveraging the latest advances in technology and by empowering children to solve this pressing challenge.</p>
          </div>
        </div>
        <footer className="cover-footer mt-auto mx-auto text-center">
          <Link to="#test-kindly" className="text-decoration-none text-blue">
            <span>Test Kindly</span><br/>
            <img src={IconArrowDownBlue} className="icon-arrow-down" alt="Downward Arrow"/>
          </Link>
        </footer>
      </div>

      <div className="px-4 p-5 border-bottom background-blue text-white" id="test-kindly">
        <div className="row align-items-center g-5 py-5">
          <div className="col-lg-5 offset-1">
            <h1 className="mb-5">Kindly aims to end cyberbullying, one message at a time.</h1>  
            <p className="lead"><b>Test Kindly for yourself!</b></p>
            <p >Reply to the message and check your entry with Kindly to see if your message is toxic or considered cyberbullying.</p>
          </div>
        </div>
        <footer className="cover-footer mt-auto mx-auto text-center">
          <span>How Kindly works</span><br/>
          <img src={IconArrowDownWhite} className="icon-arrow-down" alt="Downward Arrow"/>
        </footer>
      </div>
    </main>
  );
}

export default App;
