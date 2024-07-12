import React from "react";
import "./Portfolio.css";
import workingPanda from "../assets/WorkingPanda.png";
import panda from "../assets/Panda.png";
import babyPanda from "../assets/BabyPanda.png";

export default function Portfolio() {
  return (
    <div className="container my-4">
      <div className="fixed-bottom m-5">
        <img src={workingPanda} alt="PandaIcon" className="panda-icon" />
      </div>

      <h1>My Portfolio</h1>
      <h3>Skills</h3>
      <ul className="list-unstyled">
        <li>Fluent in English and Mandarin</li>
        <li>Proficient in Microsoft Word, Excel, and PowerPoint</li>
        <li>Proficient in Adobe Photoshop and InDesign</li>
        <li>
          Working Knowledge of CapCut, Adobe AfterEffects, and Premiere Pro
        </li>
      </ul>
      <h3>Portfolio</h3>
      <div className="d-flex">
        <div className="mx-4">
          <a
            href="https://github.com/koyostar/travel-buddy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h5>REACT App - Travel Buddy</h5>
            <img
              src={babyPanda}
              className="babypanda"
              alt="travel planner app"
            />
          </a>
        </div>
        <div className="mx-4">
          <a
            href="https://github.com/koyostar/DDNoMore_FE"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h5>MERN Stack App - DD NO MORE</h5>
            <img
              src={babyPanda}
              className="babypanda"
              alt="task management app"
            />
          </a>
        </div>
        <div className="mx-4">
          <a
            href="https://github.com/koyostar/smart-spender-fe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h5>MERN Stack App - Smart Spender</h5>
            <img
              src={babyPanda}
              className="babypanda"
              alt="expense tracker and splitter"
            />
          </a>
        </div>{" "}
        <div className="mx-4">
          <a
            href="https://github.com/koyostar/thePandaGame"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h5>JS Game - The Panda Game</h5>
            <img src={babyPanda} className="babypanda" alt="my first game" />
          </a>
        </div>
      </div>
    </div>
  );
}
