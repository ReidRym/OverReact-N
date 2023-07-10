import React from "react";
import { Parallax, Background } from "react-parallax";
import Ryanpix from "../images/pix3.JPG";

function Footer() {
  return (
    <div className="footy" style={{ width: "100%" }}>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={Ryanpix}
        bgImageAlt=""
        strength={-200}
      >
        <div style={{ height: "10px", width: "100%" }} />

        <ul>
          <li>
            <a
              href="https://github.com/ReidRym"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <i className="bi bi-github" size="32" color="blue"></i> GitHub
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/username"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <span>
                <i className="bi bi-facebook" size="32" color="blue"></i>
                Facebook
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/username"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <span>
                <i className="bi bi-twitter" size="32" color="blue"></i>Twitter
              </span>
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/yourlinkedinusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <i className="bi bi-linkedin" size="32" color="blue"></i>
                LikedIn
              </span>
            </a>
          </li>
        </ul>
      </Parallax>
    </div>
  );
}

export default Footer;
