import Footer from "../components/Footer";

function Impressum() {
  return (
    <div className="position-relative">
      <div className="container-fluid bg-no-repeat bg-cover position-relative background-container-small">
        <div className="overlay-two"></div>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <div
            
            className="d-flex flex-column justify-content-center align-items-center m-5 position-relative text-container-two col-4"
          >
            <div className="d-flex flex-md-row flex-column mb-3 align-items-center">
              <h1 className="me-md-2 ">Schwarz Duscheleit</h1>
              <h1>Geigenbau</h1>
            </div>
            <div>
              <h2>Impressum</h2>
            </div>
            <div>
            <p className="mt-5">
              <span>Josef Schwarz, Dorothea Duscheleit Geigenbaumeister </span>
              <br />
              <span>Halmstrasse 2 Berlin 14050</span> <br />
              <span>Tel: 030 3015564 </span> <br />
              <span>schwarz.duscheleit@arcor.de</span>
              <br />
              <span>
                USt-IdNr. gem.§ 27a UStG: DE 135 595 356 Inhaltlich
                verantwortlich
              </span>
              <br />
              <span>gem.§ 55 II RStV: Josef Schwarz Dorothea Duscheleit</span>
            </p>
            </div>
          </div>
        </div>
        <div className="position-relative mt-5">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Impressum;
