import React from "react";
import "./About.css";
import selfieImage from "../assets/Selfie.png";

export default function About() {
  return (
    <div className="container my-5">
      <ul className="nav nav-tabs nav-fill" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link fs-4 py-3 active"
            id="experience-tab"
            data-bs-toggle="tab"
            data-bs-target="#experience"
            type="button"
            role="tab"
            aria-controls="experience"
            aria-selected="true"
          >
            Work
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link fs-4 py-3"
            id="education-tab"
            data-bs-toggle="tab"
            data-bs-target="#education"
            type="button"
            role="tab"
            aria-controls="education"
            aria-selected="false"
          >
            Education
          </button>
        </li>
      </ul>

      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="experience"
          role="tabpanel"
          aria-labelledby="experience-tab"
        >
          <div className="section section1 mb-2">
            <div className="section-content text-left p-4">
              <h4>Journalist cum Sub-Editor</h4>
              <p>
                SPH Media—Chinese Media Group (Young Audience) | Jul 2019 – Jun
                2024
              </p>
              <ul>
                <li>
                  Produced quality written content for student publications
                  targeted at young readers.
                </li>
                <li>Designed page layout for student publications.</li>
                <li>
                  Worked with team to create original Chinese content for
                  digital platforms, including videos, social media posts, and
                  campaigns.
                </li>
                <li>
                  Managed and maintained digital platform (www.zbschools.sg).
                </li>
                <li>
                  Developed outreach plans for digital and social media
                  platforms.
                </li>
                <li>Managed outreach projects and competitions.</li>
                <li>
                  Conducted engagement sessions for teachers and students and
                  launched marketing campaigns targeted at students.
                </li>
              </ul>
            </div>
          </div>

          <div className="section section2 mb-2">
            <div className="section-content text-right p-4">
              <h4>Translator / Admin Associate</h4>
              <p>AllThings Incorporated Pte Ltd | Sept 2017 – Apr 2019</p>
              <ul>
                <li>
                  Translated English and Chinese documents for China and
                  Singapore stakeholders.
                </li>
                <li>
                  Prepared bilingual technical documents including User Manual
                  and User Acceptance Tests.
                </li>
                <li>Assisted in administration and operations.</li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="tab-pane fade"
          id="education"
          role="tabpanel"
          aria-labelledby="education-tab"
        >
          <div className="section section3 mb-2">
            <div className="section-content text-left p-4">
              <h4>Software Engineering Immersive Course</h4>
              <p>General Assembly | Dec 2023 - Jun 2024</p>
              <ul>
                <li>Chinese Language Elective Programme</li>
                <li>Bicultural Studies Programme</li>
              </ul>
            </div>
          </div>

          <div className="section section4 mb-2">
            <div className="section-content text-right p-4">
              <h4>Bachelor of Arts in Chinese Literature</h4>
              <p>Tamkang University | Sept 2013 - Aug 2017</p>
            </div>
          </div>

          <div className="section section5 mb-2">
            <div className="section-content text-left p-4">
              <h4>Singapore-Cambridge GCE A-Level</h4>
              <p>Dunman High School | Jan 2006 - Dec 2012</p>
              <ul>
                <li>Chinese Language Elective Programme</li>
                <li>Bicultural Studies Programme</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
