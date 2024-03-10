import image from "../assets/images/geigenbau-werkstatt.jpg";
import OSMMap from "../components/OSMMap";
import Footer from "../components/Footer";

function MainPage() {
  return (
    <div className="position-relative" >
    
    
    <div
      className="container-fluid bg-no-repeat bg-cover position-relative"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed", 
        height: "100vh",
        minHeight:"1200px"
        
      }}
    >
      <div className="overlay"></div>
      <div className="d-flex flex-row justify-content-center ">
        <div className="d-flex flex-column align-items-center m-5 position-relative text-container p-5" style={{width: "50%"}}>
        <div className="box-overlay bg-body-tertiary"></div>
          <div className="d-flex flex-md-row flex-column align-items-center mb-3 position-relative">
          <h1 className="me-md-2">Schwarz Duscheleit</h1>
          <h1>Geigenbau</h1>
          </div>
          <div className="d-flex flex-column align-items-center position-relative">
            <h2>Herzlich Willkommen</h2>
            <span>Wir freuen uns über Ihren Besuch</span>
            <span>oder eine Nachricht!</span>
          </div>
          <br></br>
          <div className="d-flex flex-column align-items-center position-relative">
            <h2>Öffnungszeiten</h2>
            <span>
              Montags 13-18 Uhr. 
              </span>
              <span>
              Dienstag-Freitag 11-18 Uhr.
              </span>
            <span>Samstag nach Vereinbarung</span>
          </div>
          <br></br>
          <div className="d-flex flex-column align-items-center position-relative">
            <h2>Kontakt</h2>
            <div className="d-flex flex-row">
            <span className="d-md-inline d-none">Email:&nbsp;</span> 
            <span> schwarz.duscheleit@arcor.de</span>
            </div>
            <span>Tel: 030 3015564</span>
            <span>Halmstrasse 2</span>
            <span>14050 Berlin</span>
          </div>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-center mt-5" >
        <OSMMap />
        
      </div>
      <div className="position-relative mt-5">
      <Footer />
      </div>
      
    </div>
    
    
    </div>
  );
}

export default MainPage;
