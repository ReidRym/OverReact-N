import React from "react";

function Footer() {
  return (
    <div className="footy">
      <ul>
        <li>
          <a
            href="https://github.com/ReidRym"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <i class="bi bi-github" size="32" color="blue"></i> GitHub
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
              <i class="bi bi-facebook" size="32" color="blue"></i>Facebook
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
              <i class="bi bi-twitter" size="32" color="blue"></i>Twitter
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
              <i class="bi bi-linkedin" size="32" color="blue"></i>
              LikedIn
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
