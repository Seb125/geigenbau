import Carousel from '../components/Carousel';
import handel from "../assets/images/handel.jpg";
import mietinstrumente from "../assets/images/mietinstrumente.jpg";
import axios from "axios";

import { useEffect } from 'react';

function Test() {

    
  const images = [handel,
    mietinstrumente,
    handel,];

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get("http://localhost:3000/emailjs");
      console.log(data.data.messages);
    }
    try {
      getData()
    } catch (error) {
      console.log(error)
    }
  }, [])

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
