import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import IconArrowLeftLightblue from "./img/icon-arrow-left-lightblue.svg";

function PrivacyTerms() {
  return (
    <main>
      <div className="text-center background-light-blue text-blue">
        <div className="cover-cover mx-auto mt-auto row g-5">
          {" "}
          <div className="offset-lg-1 text-lg-start text-center px-5">
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
            <h1 className="my-5">Privacy Policy and Terms of Use for Kindly</h1>
            <div className="mt-5" style={{fontSize: "0.95em"}}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante
                metus dictum at tempor commodo. Venenatis a condimentum vitae sapien.
                Neque volutpat ac tincidunt vitae semper quis lectus nulla at. Eget
                egestas purus viverra accumsan in nisl nisi. Massa sed elementum tempus
                egestas. Integer vitae justo eget magna.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default PrivacyTerms;
