import React from "react";
import girlImg from "../assets/CodingGirl.png";

export default function Home() {
  return (
    <div className="align-items-center justify-content-center max-vh-100">
      <div>
        <h2 className="intro text-center fs-1 mt-5">HI! I'M SHERMAINE LIM</h2>
      </div>
      <div className="quote-container">
        <div className="quote">
          <p className="text-center fs-2">
            A
            <span className="text-uppercase bg-warning mx-2 px-2">
              content creator
            </span>
            and an aspiring
            <span className="text-uppercase bg-warning mx-2 px-2">
              software developer
            </span>
            with a passion for delivering high-quality, user-centered solutions.
          </p>
        </div>
        <div className="quote">
          <p className="text-center fs-2">
            I am proficiently
            <span className="bg-success mx-2 px-2">
              bilingual in English and Mandarin
            </span>
            and
            <span className="bg-success mx-2 px-2">
              experienced in audience engagement
            </span>
            . This helps me collaborate with diverse teams and communicate
            complex ideas effectively.
          </p>
        </div>
      </div>
      <img src={girlImg} alt="GirlGraphic" className="coding-girl" />
    </div>
  );
}
