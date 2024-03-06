import image from "../assets/images/image.jpg";
import OSMMap from "../components/OSMMap";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MainPage() {
  return (
    <div className="position-relative" style={{height: "100vh"}}>
    <Header />
    
    <div
      className="container-fluid bg-no-repeat bg-cover position-relative"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed", 
        height: "100vh",
        minHeight:"1000px"
        
      }}
    >
      <div className="overlay"></div>
      <div className="d-flex flex-row justify-content-center">
        <div className="d-flex flex-column align-items-center text-container m-5 ">
          <h2>Schwarz Duscheleit Geigenbau</h2>
          <h2>Herzlich Willkommen</h2>
          <p>Wir freuen uns über Ihren Besuch oder eine Nachricht!</p>
          <h2>Öffnungszeiten</h2>
          <p>
            Montags 13-18 Uhr. Dienstag-Freitag 11-18 Uhr. <br />
            Samstag nach Vereinbarung
          </p>
          <h2>Kontakt</h2>
          <p>
            E-Mail: schwarz.duscheleit@arcor.de <br />
            Tel: 030 3015564 <br />
            Halmstrasse 2 <br />
            14050 Berlin
          </p>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-center" >
        <OSMMap />
      </div>
      <Footer />
    </div>
    
    
    </div>
  );
}

export default MainPage;
