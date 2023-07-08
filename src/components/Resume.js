import React from "react";
import { Parallax, Background } from "react-parallax";
import Ryanpix from "../images/pix2.JPG";
import ResumePDF from "../images/FakeResume.JPG";

function Resume() {
  return (
    <div>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={Ryanpix}
        bgImageAlt=""
        strength={-200}
      >
        <h2>Resume</h2>

        {/* content */}
        <main className="proficient">
        <div className=" text-wrapper">
          <h1>Download My Resume</h1>
          <p>
            Check out my resume to learn more about my experience and
            proficiencies.
          </p>
          <a href={ResumePDF} download>
            <button>Click for Resume</button>
          </a>
          
          <ul>
          <h2>Proficiencies:</h2>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>Heroku</li>
            <li>Adobe Creative Suite</li>
            
          </ul>
        </div>
        </main>
        <div style={{ height: "700px" }} />
      </Parallax>
    </div>
  );
}

export default Resume;