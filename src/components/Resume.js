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

            <div>
              <h2>Proficiencies:</h2>
              <div>HTML</div>
              <div>CSS</div>
              <div>JavaScript</div>
              <div>Node.js</div>
              <div>Express.js</div>
              <div>MySQL</div>
              <div>MongoDB</div>
              <div>Git</div>
              <div>GitHub</div>
              <div>Heroku</div>
              <div>Adobe Creative Suite</div>
            </div>
          </div>
        </main>
        <div style={{ height: "700px" }} />
      </Parallax>
    </div>
  );
}

export default Resume;
