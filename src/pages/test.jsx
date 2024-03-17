import Carousel from '../components/Carousel';
import handel from "../assets/images/handel.jpg";
import mietinstrumente from "../assets/images/mietinstrumente.jpg";

function Test() {

    
  const images = [handel,
    mietinstrumente,
    handel,];

  return (
    <div className='myGrid'>
    <div >
      <h1>Simple React Carousel</h1>
      <Carousel images={images} />
    </div>
    
    </div>
  );
}

export default Test;
