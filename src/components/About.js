import React from "react";
import { Parallax, Background } from 'react-parallax';
import Ryanpix from "../images/pix1.JPG"; 
import BioPic from "../images/bio1.JPG";
const About = () => {
  return (
    

    <div>
    
    <div className="biopicture">
    <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={Ryanpix}
        bgImageAlt=""
        strength={-200}
        
    >
      <h3 className="bio"></h3>

{/* content */}
<div className="card">
  <div className="card-header">
    About Me
  </div>
  <div className="card-body">
    <div className="bio-pic-container">
      <img src={BioPic} alt="bio-pic" />
      <p>I am a full stack web developer with a passion for creating innovative and user-friendly web applications. I have a background in Curiculum Developement and Corrections and have recently completed a full stack web development bootcamp. I am excited to use my skills to create applications that will make a difference in people's lives.</p>
    </div>
  </div>
</div>

        <div style={{ height: '100px' }} />
    </Parallax>
    </div>
    </div>
  );
};

export default About;