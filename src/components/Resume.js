import React from "react";
import { Parallax, Background } from "react-parallax";
import Ryanpix from "../images/pix2.JPG";
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

        <div style={{ height: "700px" }} />
      </Parallax>
    </div>
  );
}

export default Resume;
