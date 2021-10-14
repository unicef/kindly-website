import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import IconArrowDown from './img/icon-arrow-down.svg';
import IconSend from './img/icon-send.svg';

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
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column text-center">
      <div className="cover-cover text-center mt-auto">
        <div className="cover-title">
          See how messages can<br />
          be rethought, Kindly
        </div>
      </div>

      <div className="background container">
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

      <footer className="cover-footer mt-auto">
        <span>Learn about Kindly</span><br/>
        <img src={IconArrowDown} className="icon-arrow-down" alt="Downward Arrow"/>
      </footer>
    </div>
  );
}

export default App;
