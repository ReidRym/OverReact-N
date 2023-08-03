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
  const projects = [
    {
      title: "Under Note Taker",
      image: NoteTakerImage,
      description:
        "Note Taker is a web application that allows users to create and save notes.",
      codeLink: "https://github.com/ReidRym/Under_NoteTaker_11",
      deployedLink: "https://note-undertaker-challenge.herokuapp.com/",
    },
    {
      title: "PWA Text 19 Champ!",
      image: PWAText19Image,
      description: "ITS THE PROGRESSION WEB APPLICATION TEXT 19 CHAMPIONSHIP!",
      codeLink: "https://github.com/ReidRym/PWA_TEXT_19_CHAMP",
    },
    {
      title: "No Friends No Frowns NoSQL Champ!",
      image: NoFriendsNoFrownsNoSQLImage,
      description:
        "The API is built using a NoSQL database and provides routes for users and thoughts.",
      codeLink: "https://github.com/ReidRym/NoFriendsNoFrownsNoSQL",
      videoLink:
        "https://drive.google.com/file/d/14gyY0uUGgSa6zcK6wUYnDO8qZo_c7PRS/view",
    },
    {
      title: "Professional README Generator",
      image: ProfessionalREADMEGeneratorImage,
      description:
        "Get ready to show off your work and create the perfect README with our GitHub Professional README Generator! Impress employers and developers with a well-crafted, articulate document crafted with our program.",
      codeLink: "https://github.com/ReidRym/NoFriendsNoFrownsNoSQL",
      videoLink:
        "https://drive.google.com/file/d/1PCx4xN96uJp8HGRB3xpRKdBgFzw3WVEC/view",
    },
    {
      title: "SQL Track Dat Employee",
      image: SQLTrackDatEmployeeImage,
      description:
        "This command-line application is designed to manage a company's employee database. It was built with Node.js, Inquirer, and MySQL to provide an easy-to-use interface for non-developers to view and interact with information stored in the database.",
      codeLink: "https://github.com/ReidRym/SQL_Dat_Employee",
      videoLink:
        "https://drive.google.com/file/d/17ObzJNSc6cofV5QN5NORANdHn0vYAnnn/view",
    },
    {
      title: "I am ORM Less Challenge!",
      image: IamORMLessChallengeImage,
      description:
        "This repository contains an Express.js API with a MySQL database for an e-commerce website. It uses the latest technologies to provide a secure and functional back-end.",
      codeLink: "https://github.com/ReidRym/SQL_Dat_Employee",
      videoLink:
        "https://drive.google.com/file/d/1r9cM-YyMk5EiHWAPKeLCdlZeAKAk7aNL/view",
    },
  ];

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
          {projects.map(project => (
            <li>
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="iconGrowth">
                  <img src={project.image} alt={project.title} />
                  {project.title}
                </span>
              </a>
              {project.deployedLink && (
                <a
                  href={project.deployedLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="iconGrowth">
                    <img src={project.image} alt={project.title} />
                    (Heroku Link)
                  </span>
                </a>
              )}
              {project.videoLink && (
                <a
                  href={project.videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="iconGrowth">
                    <img src={project.image} alt={project.title} />
                    (Walkthrough Video)
                  </span>
                </a>
              )}
              <h3>{project.description}</h3>
            </li>
          ))}
          {/* content */}

          <div style={{ height: "300px" }} />
        </ul>
      </Parallax>
    </div>
  );
};

export default Portfolio;
