import React from "react";
import "./About.css";
import selfieImage from "../assets/Selfie.png";

export default function About() {
  return (
    <div className="about-container">
      <div
        id="aboutCarousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="section section1 mb-2">
              <div className="section-content text-left p-4">
                <h4 className="fw-bold">Journalist cum Sub-Editor</h4>
                <h5>SPH Media (Chinese Student Publications) </h5>
                <h6>Jul 2019 – Jun 2024</h6>
                <p>
                  <span className="fw-bold">Content Creation</span>
                  <br />I created original Chinese content for print and digital
                  platforms, including articles, videos, social media posts, and
                  campaigns. This role allowed me to showcase my creativity and
                  meticulous attention to detail.
                </p>
                <p>
                  <span className="fw-bold">Platform Management</span>
                  <br />I managed and maintained the digital platform
                  <a
                    href="https://www.zbschools.sg/"
                    className="text-dark px-1"
                  >
                    ZBSchools.sg
                  </a>
                  gaining valuable insights into front-end user needs and
                  back-end developer operations.
                </p>
                <p>
                  <span className="fw-bold">Events & Outreach</span>
                  <br />I also coordinated multiple events, such as “ZBSchools
                  PRO 早报校园创意新星挑战赛” and “Create Your Own Newspaper
                  Competition 全国中学编采比赛”. These experiences honed my
                  organizational and project management skills. Additionally, I
                  conducted engagement sessions for teachers and students and
                  launched targeted marketing campaigns, demonstrating strong
                  interpersonal and presentation abilities.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="section section2 mb-2">
              <div className="section-content text-right p-4">
                <h4 className="fw-bold">Translator / Admin Associate</h4>
                <h5>AllThings Incorporated Pte Ltd</h5>
                <h6>Sept 2017 – Apr 2019</h6>
                <p>
                  <span className="fw-bold">Translation</span>
                  <br />
                  At this tech startup specializing in IoT (Internet of Things)
                  solutions, my role involved communicating technical
                  information with stakeholders in China and Singapore. I
                  translated and prepared English and Chinese documents,
                  including User Manuals and User Acceptance Tests.
                </p>
                <p>
                  My fluency in both English and Mandarin enables me to
                  collaborate effectively with diverse teams and convey complex
                  ideas clearly.
                </p>
                <p>
                  <span className="fw-bold">Project Administration</span>
                  <br />I assisted in administration and operations which
                  required strong execution abilities, resourcefulness, and the
                  capacity to work under pressure. This role further enhanced my
                  flexibility and adaptability.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="section section3 mb-2">
              <div className="section-content text-left p-4">
                <h4 className="fw-bold">
                  Software Engineering Immersive Course
                </h4>
                <h5>General Assembly</h5>
                <h6>Dec 2023 - Jun 2024</h6>
                <p>
                  I completed the 420hr Software Engineering Immersive Course,
                  learning front-end and back-end development skills such as
                  HTML, CSS, Javascript, MongoDB, Express, React and Python.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="section section4 mb-2">
              <div className="section-content text-right p-4">
                <div>
                  <h4 className="fw-bold">
                    Bachelor of Arts in Chinese Literature
                  </h4>
                  <h5>Tamkang University</h5>
                  <h6>Sept 2013 - Aug 2017</h6>
                  <p>
                    Having majored in Chinese Literature and studied in Taiwan
                    for four years, I gained deep insights into the Chinese
                    culture and environment, further enhancing my ability to
                    engage with a global audience.
                  </p>
                </div>
                <div className="mt-2">
                  <h4 className="fw-bold">Singapore-Cambridge GCE A-Level</h4>
                  <h5>Dunman High School</h5>
                  <h6>Jan 2006 - Dec 2012</h6>
                  <p>
                    During my six years as an Integrated Program student, I was
                    enrolled in the Chinese Language Elective Programme and
                    Bicultural Studies Programme. These programs fostered my
                    passion for the Chinese language and culture, further
                    igniting my interest in these areas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#aboutCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#aboutCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden text-danger">Next</span>
        </button>
      </div>
      <div
        className="indicator-container d-flex justify-content-around m-3"
        id="carouselIndicators"
        role="tablist"
      >
        <button
          className="carousel-indicator text-secondary fs-3 active"
          role="presentation"
          type="button"
          data-bs-target="#aboutCarousel"
          data-bs-slide-to="0"
          aria-current="true"
          aria-label="Journalist cum Sub-Editor"
        >
          <span className="bi-pen-fill"></span>
        </button>
        <button
          className="carousel-indicator text-secondary fs-3 "
          role="presentation"
          type="button"
          data-bs-target="#aboutCarousel"
          data-bs-slide-to="1"
          aria-label="Translator / Admin Associate"
        >
          <span className="bi-briefcase-fill"></span>
        </button>
        <button
          className="carousel-indicator text-secondary fs-3 "
          role="presentation"
          type="button"
          data-bs-target="#aboutCarousel"
          data-bs-slide-to="2"
          aria-label="Software Engineering Immersive Course"
        >
          <span className="bi-laptop"></span>
        </button>
        <button
          className="carousel-indicator text-secondary fs-3 "
          role="presentation"
          type="button"
          data-bs-target="#aboutCarousel"
          data-bs-slide-to="3"
          aria-label="Bachelor of Arts in Chinese Literature"
        >
          <span className="bi-mortarboard-fill"></span>
        </button>
      </div>
    </div>
  );
}
