import React from "react";
import project1 from "../assets/thumbnails/PandaGame.png";
import project2 from "../assets/thumbnails/TravelBuddy.png";
import project3 from "../assets/thumbnails/SmartSpender.png";
import project4 from "../assets/thumbnails/DDNoMore.png";

export default function Projects() {
  return (
    <div className="projects d-flex  justify-content-around flex-wrap">
      <div className="card-container d-flex mt-5">
        <a
          href="https://github.com/koyostar/DDNoMore_FE"
          className="text-decoration-none"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="card mx-4 border-0">
            <img
              src={project4}
              className="card-img project4"
              alt="task management app"
            />
            <p className="card-img-overlay card-text">
              <span className="text-uppercase mb-2">MERN Stack App</span>
              Task management app designed to track task progress and deadlines.
              It also allows users to log time spent on individual tasks,
              providing a better record of work hours.
            </p>
          </div>
          <h5 className="card-title text-dark fs-3">DD No More</h5>
        </a>
      </div>
      <div className="card-container d-flex mt-5">
        <a
          href="https://github.com/koyostar/smart-spender-fe"
          className="text-decoration-none"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="card mx-4 border-0">
            <img
              src={project3}
              className="card-img project3"
              alt="expense tracker and splitter"
            />
            <p className="card-img-overlay card-text">
              <span className="text-uppercase mb-2">MERN Stack App</span>
              An expense tracking app that consolidates and provides statistical
              information about group expenses, making bill splitting easier.
            </p>
          </div>
          <h5 className="card-title text-dark fs-3">Smart Spender</h5>
        </a>
      </div>
      <div className="card-container d-flex mt-5">
        <a
          href="https://github.com/koyostar/travel-buddy"
          className="text-decoration-none"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="card mx-4 border-0">
            <img
              src={project2}
              className="card-img project2"
              alt="travel planner app"
            />
            <p className="card-img-overlay card-text">
              <span className="text-uppercase mb-2">REACT App</span>A basic
              travel planning app that consolidates all your travel information
              together.
            </p>
          </div>
          <h5 className="card-title text-dark fs-3">Travel Buddy</h5>
        </a>
      </div>
      <div className="card-container d-flex mt-5">
        <a
          href="https://github.com/koyostar/thePandaGame"
          className="text-decoration-none"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="card mx-4 border-0">
            <img
              src={project1}
              className="card-img project1"
              alt="my first game"
            />
            <p className="card-img-overlay card-text">
              <span className="text-uppercase mb-2">JS Game</span>A traditional
              game of snakes but with a much cuter animal - Pandas. My first
              project developed with basic knowledge of HTML, CSS and
              Javascript.
            </p>
          </div>
          <h5 className="card-title text-dark fs-3">The Panda Game</h5>
        </a>
      </div>
    </div>
  );
}
