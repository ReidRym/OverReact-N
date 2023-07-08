import React from "react";
import { Parallax, Background } from "react-parallax";
import Ryanpix from "../images/pix4.JPG";

const Portfolio = () => {
  return (
    <div>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={Ryanpix}
        bgImageAlt=""
        strength={-200}
      >
        <div style={{ height: "10px", width: "5000px" }} />
        <h1 className="portfolio-header">Portfolio:</h1> <h3>Click Icon to see projects:</h3>
        <ul>
          <li>
            <a
              href="https://github.com/ReidRym/Under_NoteTaker_11"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <i class="bi bi-sign-dead-end" size="50" color="black"></i>{" "}
                Under Note Taker
              </span>
            </a>
            <h6>
              Note Taker is a web application that allows users to create and
              save notes.
            </h6>
          </li>
          <li>
            <a
              href="https://github.com/ReidRym/PWA_TEXT_19_CHAMP"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <i class="bi bi-trophy" size="50" color="black"></i> PWA Text 19
                Champ!
              </span>
            </a>
            <h6> ITS THE PROGRESSION WEB APPLICATION TEXT 19 CHAMPIONSHIP! </h6>
          </li>
          <li>
            <a
              href="https://github.com/ReidRym/NoFriendsNoFrownsNoSQL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <i class="bi bi-hand-thumbs-down" size="50" color="black"></i>{" "}
                No Friends No Frowns NoSQL Champ!
              </span>
            </a>
            <h6>
              The API is built using a NoSQL database and provides routes for
              users and thoughts.
            </h6>
          </li>
          <li>
            <a
              href="https://github.com/ReidRym/NoFriendsNoFrownsNoSQL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <i class="bi bi-book" size="50" color="black"></i>Professional
                README Generator.
              </span>
            </a>
            <h6>
              Get ready to show off your work and create the perfect README with
              our GitHub Professional README Generator! Impress employers and
              developers with a well-crafted, articulate document crafted with
              our program.
            </h6>
          </li>
          <li>
            <a
              href="https://github.com/ReidRym/SQL_Dat_Employee"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <i class="bi bi-check-square" size="50" color="black"></i>SQL Track Dat Employee
              </span>
            </a>
            <h6>
            This command-line application is designed to manage a company's employee database. It was built with Node.js, Inquirer, and MySQL to provide an easy-to-use interface for non-developers to view and interact with information stored in the database.
            </h6>
          </li>
          <li>
            <a
              href="https://github.com/ReidRym/SQL_Dat_Employee"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <i class="bi bi-incognito" size="50" color="black"></i>I am ORM Less Challenge!
              </span>
            </a>
            <h6>
            This repository contains an Express.js API with a MySQL database for an e-commerce website. It uses the latest technologies to provide a secure and functional back-end. 
            </h6>
          </li>
         
          {/* content */}

          <div style={{ height: "700px" }} />
        </ul>
      </Parallax>
    </div>
  );
};

export default Portfolio;
