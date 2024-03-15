import handel from "../assets/images/handel.jpg";
import mietinstrumente from "../assets/images/mietinstrumente.jpg";
import reparatur from "../assets/images/reparatur.jpg";
import { Carousel } from 'react-bootstrap';



function Test() {

  

  return (
    <div>
    <div id="imageCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={handel} className="d-block w-100" alt="Image 1"/>
                </div>
                <div className="carousel-item">
                    <img src={mietinstrumente} className="d-block w-100" alt="Image 2"/>
                </div>
                <div className="carousel-item">
                    <img src={reparatur} className="d-block w-100" alt="Image 2"/>
                </div>
                <div className="carousel-item">
                    <img src={mietinstrumente} className="d-block w-100" alt="Image 2"/>
                </div>
               
            </div>
            <a className="carousel-control-prev" href="#imageCarousel" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </a>
            <a className="carousel-control-next" href="#imageCarousel" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </a>
            
        </div>
  </div>
  );
}

export default Test;
