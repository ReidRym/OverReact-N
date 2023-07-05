// presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)
import React from "react";

function Footer() {
  return (
    <div>
      <ul>
        <li>
          <a
            href="https://github.com/yourgithubusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/yourlinkedinusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
