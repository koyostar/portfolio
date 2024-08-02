import React from "react";
import girlImg from "../assets/CodingGirl.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="align-items-center justify-content-center max-vh-100">
      <div>
        <h2 className="intro text-center fs-1 mt-5">HI! I'M SHERMAINE LIM</h2>
        <p className="text-center fs-2 fw-bold">
          Merging
          <span className="text-uppercase bg-warning mx-2 px-2">
            creative skills
          </span>
          with
          <span className="text-uppercase bg-warning mx-2 px-2">
            tech aspirations
          </span>
          for a dynamic digital future.
        </p>
      </div>
      <div className="quote-container">
        <div className="quote">
          <p className="text-center fs-2">
            Proficiently
            <span className="bg-success mx-2 px-2">
              bilingual in English and Mandarin
            </span>
            and having
            <span className="bg-success mx-2 px-2">
              strong interpersonal ability
            </span>
            enables me to collaborate with diverse teams and communicate complex
            ideas effectively.
          </p>
        </div>
        <div className="quote">
          <p className="text-center fs-2">
            My diverse background equips me with a unique perspective and a
            desire to enhance user experiences through technology.
          </p>
          <p className="text-center fs-2">
            Learn more about my
            <Link
              to="/about"
              className="text-uppercase bg-danger text-light mx-2 px-2"
            >
              experiences
            </Link>
            and
            <Link
              to="/portfolio"
              className="text-uppercase bg-danger text-light mx-2 px-2"
            >
              works
            </Link>
            .
          </p>
        </div>
      </div>
      <img src={girlImg} alt="GirlGraphic" className="coding-girl" />
    </div>
  );
}
