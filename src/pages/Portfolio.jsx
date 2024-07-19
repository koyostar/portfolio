import React from "react";
import "./Portfolio.css";
import workingPanda from "../assets/WorkingPanda.png";
import project1 from "../assets/PandaGame.png";
import project2 from "../assets/TravelBuddy.png";
import project3 from "../assets/SmartSpender.png";
import project4 from "../assets/DDNoMore.png";

export default function Portfolio() {
  return (
    <div className="portfolio-container my-4">
      {/* <div className="fixed-bottom m-5">
        <img src={workingPanda} alt="PandaIcon" className="panda-icon" />
      </div> */}

      <h1 className="mx-4 fw-bold">My Portfolio</h1>
      {/* <h3 className="mx-4 fw-bold">Skills</h3>
      <div className="skills mx-4">
        <ul className="list-unstyled">
          <li>Fluent in English and Mandarin</li>
          <li>Proficient in Microsoft Word, Excel, and PowerPoint</li>
          <li>Proficient in Adobe Photoshop and InDesign</li>
          <li>
            Working Knowledge of CapCut, Adobe AfterEffects, and Premiere Pro
          </li>
        </ul>
      </div>
      <h3 className="mx-4 fw-bold">Portfolio</h3> */}
      <div className="projects d-flex  justify-content-around flex-wrap">
        <div className="card-container d-flex mt-5">
          <a
            href="https://github.com/koyostar/DDNoMore_FE"
            className="text-decoration-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card mx-4">
              <img
                src={project4}
                className="card-img project4"
                alt="task management app"
              />
              <p className="card-img-overlay card-text">
                <span className="text-uppercase mb-2">MERN Stack App</span>
                Task management app designed to track task progress and
                deadlines. It also allows users to log time spent on individual
                tasks, providing a better record of work hours.
              </p>
            </div>
            <h5 className="card-title">DD No More</h5>
          </a>
        </div>
        <div className="card-container d-flex mt-5">
          <a
            href="https://github.com/koyostar/smart-spender-fe"
            className="text-decoration-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card mx-4">
              <img
                src={project3}
                className="card-img project3"
                alt="expense tracker and splitter"
              />
              <p className="card-img-overlay card-text">
                <span className="text-uppercase mb-2">MERN Stack App</span>
                An expense tracking app that consolidates and provides
                statistical information about group expenses, making bill
                splitting easier.
              </p>
            </div>
            <h5 className="card-title">Smart Spender</h5>
          </a>
        </div>
        <div className="card-container d-flex mt-5">
          <a
            href="https://github.com/koyostar/travel-buddy"
            className="text-decoration-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card mx-4">
              <img
                src={project2}
                className="card-img project2"
                alt="travel planner app"
              />
              <p className="card-img-overlay card-text">
                <span className="text-uppercase mb-2">REACT App</span>A basic
                travel planning app that consolidates all your travel
                information together.
              </p>
            </div>
            <h5 className="card-title">Travel Buddy</h5>
          </a>
        </div>
        <div className="card-container d-flex mt-5">
          <a
            href="https://github.com/koyostar/thePandaGame"
            className="text-decoration-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card mx-4">
              <img
                src={project1}
                className="card-img project1"
                alt="my first game"
              />
              <p className="card-img-overlay card-text">
                <span className="text-uppercase mb-2">JS Game</span>A
                traditional game of snakes but with a much cuter animal -
                Pandas. My first project developed with basic knowledge of HTML,
                CSS and Javascript.
              </p>
            </div>
            <h5 className="card-title">The Panda Game</h5>
          </a>
        </div>
      </div>
    </div>
  );
}
