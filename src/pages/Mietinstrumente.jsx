import image from "../assets/images/geigenbau-werkstatt.jpg";
import handel from "../assets/images/mietinstrumente.jpg";
import Footer from "../components/Footer";

function Handel() {
  return (
    <div className="position-relative">
      <div
        className="container-fluid bg-no-repeat bg-cover position-relative background-container">
        <div className="overlay-two"></div>
        <div className="d-flex flex-row justify-content-center ">
          <div className="d-flex flex-column align-items-center m-5 position-relative text-container-two">
            <div className="d-flex flex-md-row flex-column align-items-center mb-3">
              <h1 className="me-md-2 ">Schwarz Duscheleit</h1>
              <h1>Geigenbau</h1>
            </div>
            <div className="d-flex flex-column align-items-center mb-5">
              <h2>Mietinstrumente</h2>
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
              <div className="me-0 memd-5">
                <img src={handel} className="horizontal-picture" />
              </div>
              <div className="d-flex flex-column justify-content-center">
                <span>
                  Wir verleihen Geigen, Bratschen und Celli in allen Größen
                  (1/16 - 4/4) und Qualitäten.
                </span>
                <br></br>
                <span>
                  Die Instrumente werden in unserer Werkstatt optimal
                  hergerichtet und spielfertig gemacht.
                </span>
                <br></br>
                <span>
                  Geigen können ab 17.-€ (inkl.Versicherung) ausgeliehen werden,
                  Celli ab 25.-€, inklusive Bogen und Etui/Hülle (bei Celli ist
                  die Versicherung nicht im Mietpreis enthalten). Die
                  Mindestmietdauer beträgt 3 Monate, danach monatlich kündbar.
                  Bei einem späteren Instrumentenkauf werden bis zu 6
                  Monatsmieten angerechnet.
                </span>
                <br></br>
                <span>
                  Saiten und weiteres Zubehör sind ebenfalls erhältlich.
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
