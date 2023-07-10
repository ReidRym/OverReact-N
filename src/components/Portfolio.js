import React from "react";
import { Parallax, Background } from "react-parallax";
import Ryanpix from "../images/pix4.JPG";
import NoteTakerImage from "../images/NoteTakerImage2.JPG";
import PWAText19Image from "../images/PWAText19Image.JPG";
import NoFriendsNoFrownsNoSQLImage from "../images/NoFriends.JPG";
import ProfessionalREADMEGeneratorImage from "../images/PRMEGEN.JPG";
import SQLTrackDatEmployeeImage from "../images/TDEI.JPG";
import IamORMLessChallengeImage from "../images/ORM.JPG";

const Portfolio = () => {
  return (
    <div>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={Ryanpix}
        bgImageAlt=""
        strength={-200}
      >
        <div style={{ height: "5px", width: "50px" }} />
        <h1 className="portfolio-header">
          Portfolio: Click Icon to see projects:
        </h1>
        <ul>
          <li>
            <a
              href="https://github.com/ReidRym/Under_NoteTaker_11"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="iconGrowth">
                
                <img src={NoteTakerImage} alt="Note Taker Image" />
                Under Note Taker
              </span>
            </a>
            <h3>
              Note Taker is a web application that allows users to create and
              save notes.
            </h3>
          </li>
          <li>
            <a
              href="https://github.com/ReidRym/PWA_TEXT_19_CHAMP"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="iconGrowth">
                <img src={PWAText19Image} alt="PWA Text 19 Image" />
                PWA Text 19 Champ!
              </span>
            </a>
            <h3> ITS THE PROGRESSION WEB APPLICATION TEXT 19 CHAMPIONSHIP! </h3>
          </li>
          <li>
            <a
              href="https://github.com/ReidRym/NoFriendsNoFrownsNoSQL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="iconGrowth">
                <img
                  src={NoFriendsNoFrownsNoSQLImage}
                  alt="No Friends No Frowns NoSQL Image"
                />
                No Friends No Frowns NoSQL Champ!
              </span>
            </a>
            <h3>
              The API is built using a NoSQL database and provides routes for
              users and thoughts.
            </h3>
          </li>
          <li>
            <a
              href="https://github.com/ReidRym/NoFriendsNoFrownsNoSQL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="iconGrowth">
                <img
                  src={ProfessionalREADMEGeneratorImage}
                  alt="Professional README Generator Image"
                />
                Professional README Generator.
              </span>
            </a>
            <h3>
              Get ready to show off your work and create the perfect README with
              our GitHub Professional README Generator! Impress employers and
              developers with a well-crafted, articulate document crafted with
              our program.
            </h3>
          </li>
          <li>
            <a
              href="https://github.com/ReidRym/SQL_Dat_Employee"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="iconGrowth">
                <img
                  src={SQLTrackDatEmployeeImage}
                  alt="SQL Track Dat Employee Image"
                />
                SQL Track Dat Employee
              </span>
            </a>
            <h3>
              This command-line application is designed to manage a company's
              employee database. It was built with Node.js, Inquirer, and MySQL
              to provide an easy-to-use interface for non-developers to view and
              interact with information stored in the database.
            </h3>
          </li>
          <li>
            <a
              href="https://github.com/ReidRym/SQL_Dat_Employee"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="iconGrowth">
                <img
                  src={IamORMLessChallengeImage}
                  alt="I am ORM Less Challenge Image"
                />
                I am ORM Less Challenge!
              </span>
            </a>
            <h3>
              This repository contains an Express.js API with a MySQL database
              for an e-commerce website. It uses the latest technologies to
              provide a secure and functional back-end.
            </h3>
          </li>

          {/* content */}

          <div style={{ height: "300px" }} />
        </ul>
      </Parallax>
      

    </div>
  );
};

export default Portfolio;
