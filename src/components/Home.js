import React from "react";
import { Parallax,Background } from 'react-parallax';
import Ryanpix from "../images/IMG-1313.JPG";
const Home = () => {
  return (
    <div>
 <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={Ryanpix}
        bgImageAlt=""
        strength={-200}
    >
     <h2>this is home page</h2> 
     <div style={{ height: '700px' }} />
    </Parallax>


    </div>
  );
};

export default Home;
