import React from "react";
import workingPanda from "../assets/WorkingPanda.png";
import Videos from "../components/Videos";
import Projects from "../components/Projects";
import Articles from "../components/Articles";
import Outreach from "../components/Outreach";
import "../pages/Portfolio.css";

export default function Portfolio() {
  return (
    <div className="portfolio-container my-4">
      <ul
        className="nav nav-tabs d-flex justify-content-around fs-4 fw-bold"
        id="portfolioTab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="projects-tab"
            data-bs-toggle="tab"
            data-bs-target="#projects"
            type="button"
            role="tab"
            aria-controls="projects"
            aria-selected="true"
          >
            PROJECTS
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="videos-tab"
            data-bs-toggle="tab"
            data-bs-target="#videos"
            type="button"
            role="tab"
            aria-controls="videos"
            aria-selected="false"
          >
            VIDEOS
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="articles-tab"
            data-bs-toggle="tab"
            data-bs-target="#articles"
            type="button"
            role="tab"
            aria-controls="articles"
            aria-selected="false"
          >
            ARTICLES
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="outreach-tab"
            data-bs-toggle="tab"
            data-bs-target="#outreach"
            type="button"
            role="tab"
            aria-controls="outreach"
            aria-selected="false"
          >
            OUTREACH
          </button>
        </li>
      </ul>
      <div className="tab-content" id="portfolioTabContent">
        <div
          className="tab-pane fade show active"
          id="projects"
          role="tabpanel"
          aria-labelledby="projects-tab"
        >
          <Projects />
        </div>
        <div
          className="tab-pane fade"
          id="videos"
          role="tabpanel"
          aria-labelledby="videos-tab"
        >
          <Videos />
        </div>
        <div
          className="tab-pane fade"
          id="articles"
          role="tabpanel"
          aria-labelledby="articles-tab"
        >
          <Articles />
        </div>
        <div
          className="tab-pane fade"
          id="outreach"
          role="tabpanel"
          aria-labelledby="outreach-tab"
        >
          <Outreach />
        </div>
      </div>
    </div>
  );
}
