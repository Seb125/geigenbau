import image from "../assets/images/geigenbau-werkstatt.jpg";
import handel from "../assets/images/reparatur.jpg";
import Footer from "../components/Footer";

function Handel() {
  return (
    <div className="position-relative">
      <div
        className="container-fluid bg-no-repeat bg-cover position-relative" id="background-container-small">
        <div className="overlay-two"></div>
        <div className="d-flex flex-row justify-content-center ">
          <div className="d-flex flex-column align-items-center m-5 position-relative text-container-two">
            <div className="d-flex flex-md-row flex-column align-items-center mb-3">
              <h1 className="me-md-2 ">Schwarz Duscheleit</h1>
              <h1>Geigenbau</h1>
            </div>
            <div className="d-flex flex-column align-items-center mb-5">
              <h2>Reparatur</h2>
            </div>

            <div className="position-relative text-container">
              <hr
                className=""
                style={{
                  color: "rgb(0, 0, 0)",
                  backgroundColor: "rgb(15, 15, 15)",
                  height: 5,
                }}
              />
            </div>

            <div
              className="d-flex flex-column flex-md-row justify-content-center align-items-center position-relative mt-5 mb-5"
              style={{ width: "80%" }}
            >
              <div className="me-0 me-md-5">
                <img src={handel} className="horizontal-picture" />
              </div>
              <div className="d-flex flex-column justify-content-center">
                <span>In unserer Werkstatt werden</span>
                <br></br>
                <span>- alle gängigen Reparaturen und Restaurationen</span>
                <br></br>
                <span>- Klangeinrichtungen</span>
                <br></br>
                <span>
                  - sowie Bogenbehaarungen und Bogenreparaturen angeboten.
                </span>
              </div>
            </div>

            <div className="position-relative text-container mb-5">
              <hr
                className=""
                style={{
                  color: "black",
                  backgroundColor: "black",
                  height: 5,
                }}
              />
            </div>

            <div className="position-relative mt-5">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Handel;
