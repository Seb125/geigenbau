import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import mietinstrumente from "../assets/images/mietinstrumente.jpg";

function Neubau() {
  const images = [mietinstrumente, mietinstrumente, mietinstrumente];

  return (
    <div className="container-fluid bg-no-repeat bg-cover position-relative background-container-small">
      <div className="overlay-two"></div>
      <div className="d-flex flex-row justify-content-center ">
        <div className="d-flex flex-column align-items-center m-5 position-relative text-container-two">
          <div className="d-flex flex-md-row flex-column align-items-center mb-3">
            <h1 className="me-md-2 ">Schwarz Duscheleit</h1>
            <h1>Geigenbau</h1>
          </div>
          <div className="d-flex flex-column align-items-center mb-5">
            <h2>Neubau</h2>
          </div>
          <div className="position-relative text-container mb-5">
            <hr
              className=""
              style={{
                color: "rgb(0, 0, 0)",
                backgroundColor: "rgb(15, 15, 15)",
                height: 5,
              }}
            />
          </div>
          <Carousel images={images} />

          <div className="d-flex flex-column justify-content-center mt-4">
                <span>
                Neben Restaurationen und Reparaturen werden kontinuierlich neue Geigen, Bratschen und Celli gebaut.
                </span>
            </div>

          <div className="position-relative text-container mt-5">
            <hr
              className=""
              style={{
                color: "rgb(0, 0, 0)",
                backgroundColor: "rgb(15, 15, 15)",
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
  );
}

export default Neubau;
