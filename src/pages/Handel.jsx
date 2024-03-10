import image from "../assets/images/geigenbau-werkstatt.jpg";
import handel from "../assets/images/handel.jpg";
import Footer from "../components/Footer";

function Handel() {
  return (
    <div className="position-relative">
      <div
        className="container-fluid bg-no-repeat bg-cover position-relative"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          height: "100vh",
          minHeight: "1200px",
        }}
      >
        <div className="overlay"></div>
        <div className="d-flex flex-row justify-content-center ">
          <div className="d-flex flex-column align-items-center m-5 position-relative text-container">
            <div className="d-flex flex-md-row flex-column align-items-center mb-3">
              <h1 className="me-md-2">Schwarz Duscheleit</h1>
              <h1>Geigenbau</h1>
            </div>
            <div className="d-flex flex-column align-items-center">
              <h2>Handel</h2>
            </div>

            <hr></hr>

            <div
              className="d-flex flex-row justify-content-center position-relative"
              style={{ width: "60%" }}
            >
              <div>
                <img src={handel} style={{ width: "80%" }} />
              </div>
              <div className="d-flex flex-column justify-content-center">
                <span>
                  Wir bieten Streichinstrumente und Bögen vom Schülerinstrument
                  bis zum Meisterinstrument an. Diese können bei uns angespielt
                  werden und gegebenenfalls in den eigenen Räumen ausprobiert
                  werden.
                </span>
                <span>
                  Saiten und weiteres Zubehör sind ebenfalls erhältlich.
                </span>
              </div>
            </div>

            <hr></hr>

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
