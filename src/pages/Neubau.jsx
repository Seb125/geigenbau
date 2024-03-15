import handel from "../assets/images/handel.jpg";
import Footer from "../components/Footer";

function Neubau() {
  return (
    <div className="position-relative">
      <div className="container-fluid bg-no-repeat bg-cover position-relative background-container">
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

           
              <div className="me-md-5 mb-5 mb-md-0">
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="0"
                      className="active"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="1"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="2"
                    ></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        className="d-block w-100"
                        src={handel}
                        alt="First slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src={handel}
                        alt="Second slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src={handel}
                        alt="Third slide"
                      />
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
              <div className="d-flex flex-column justify-content-center">
                <span>
                  Neben Restaurationen und Reparaturen werden kontinuierlich
                  neue Geigen, Bratschen und Celli gebaut.
                </span>
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

export default Neubau;
