import React from "react";
import { Parallax,Background } from 'react-parallax';
import Ryanpix from "../images/IMG-1313.JPG";
const Portfolio = () => {
  return (
    //insert titled images of six of applications with links to both the deployed applications and the corresponding GitHub repository

    <div>
    
    
    <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={Ryanpix}
        bgImageAlt=""
        strength={-200}
    >
      <h2>Portfolio</h2>

{/* content */}




        <div style={{ height: '700px' }} />
    </Parallax>
    
    </div>
  );
};

export default Portfolio;
