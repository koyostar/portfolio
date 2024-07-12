import React from "react";
import selfieImage from "../assets/Selfie.png";

export default function Home() {
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100">
      <div className="container text-center my-5 ">
        <div className="intro d-sm-flex justify-content-center align-items-center mb-5">
          <img
            src={selfieImage}
            alt="Selfie"
            className="selfie-img mr-3 mb-3"
          />
          <div className="text-center mb-4">
            <h2 className="text-center intro-title fs-1 mb-5">
              HI! I'M SHERMAINE LIM
            </h2>
            <blockquote class="blockquote m-2">
              <p className="text-center fs-2">
                A
                <span className="text-uppercase highlight">
                  content creator
                </span>
                and an aspiring
                <span className="text-uppercase highlight">
                  software developer
                </span>
                with a passion for delivering high-quality, user-centered
                solutions. <br />I am proficiently
                <span className="highlight2">
                  bilingual in English and Mandarin
                </span>
                and
                <span className="highlight2">
                  experienced in audience engagement
                </span>
                . This helps me collaborate with diverse teams and communicate
                complex ideas effectively.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
