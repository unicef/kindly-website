import {HashLink} from "react-router-hash-link";

function Footer() {
  return (
    <div className="p-5 background-black text-white">
      <div className="container-lg">
        <div className="row align-items-center g-5 py-5">
          <div className="col-4 mx-auto">
            <h1>Kindly</h1>
            <p>
              Kindly is the product of innovator Gitanjali Rao and UNICEF&apos;s
              collaboration
            </p>
          </div>
          <div className="col-3 mx-auto text-white">
            <div className="row mb-3">
              <HashLink to="#test-kindly" className="text-decoration-none text-white ">
                Learn
              </HashLink>
            </div>
            <div className="row mb-3">
              <HashLink to="/contribute" className="text-decoration-none text-white ">
                Contribute data
              </HashLink>
            </div>
            <div className="row mb-3">
              <a
                href="https://github.com/unicef/kindly"
                className="text-decoration-none text-white"
                target="_blank"
                rel="noreferrer"
              >
                Access Software Repository
              </a>
            </div>
            <div className="row">
              <a
                className="text-decoration-none text-white"
                href="mailto:kindly@unicef.org"
                rel="noreferrer"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
