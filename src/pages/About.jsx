import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="container mt-5">
      <h2 className="text-center">About Me</h2>
      <p className="text-center">
        Hi! I'm Shermaine Lim Si Hui, a content creator and media manager with a
        passion for delivering high-quality, user-centered solutions. I am
        proficiently bilingual in English and Mandarin and experienced in
        audience engagement, which helps me collaborate with diverse teams and
        communicate complex ideas effectively.
      </p>

      <h3>Professional Experience</h3>
      <div className="section section1 mb-4">
        <div className="section-content text-left p-4">
          <h4>Journalist cum Sub-Editor</h4>
          <p>
            SPH Media—Chinese Media Group (Young Audience) | Jul 2019 – Jun 2024
          </p>
          <ul>
            <li>
              Produced quality written content for student publications targeted
              at young readers.
            </li>
            <li>Designed page layout for student publications.</li>
            <li>
              Worked with team to create original Chinese content for digital
              platforms, including videos, social media posts, and campaigns.
            </li>
            <li>Managed and maintained digital platform (www.zbschools.sg).</li>
            <li>
              Developed outreach plans for digital and social media platforms.
            </li>
            <li>Managed outreach projects and competitions.</li>
            <li>
              Conducted engagement sessions for teachers and students and
              launched marketing campaigns targeted at students.
            </li>
          </ul>
        </div>
      </div>

      <div className="section section2 mb-4">
        <div className="section-content text-right p-4">
          <h4>Translator / Admin Associate</h4>
          <p>AllThings Incorporated Pte Ltd | Sept 2017 – Apr 2019</p>
          <ul>
            <li>
              Translated English and Chinese documents for China and Singapore
              stakeholders.
            </li>
            <li>
              Prepared bilingual technical documents including User Manual and
              User Acceptance Tests.
            </li>
            <li>Assisted in administration and operations.</li>
          </ul>
        </div>
      </div>

      <h3>Education</h3>
      <div className="section section3 mb-4">
        <div className="section-content text-left p-4">
          <h4>Bachelor of Arts in Chinese Literature</h4>
          <p>Tamkang University | Sept 2013 - Aug 2017</p>
          <ul>
            <li>Chinese Language Elective Programme</li>
            <li>Bicultural Studies Programme</li>
          </ul>
        </div>
      </div>

      <div className="section section4 mb-4">
        <div className="section-content text-right p-4">
          <h4>Singapore-Cambridge GCE A-Level</h4>
          <p>Dunman High School | Jan 2006 - Dec 2012</p>
        </div>
      </div>
    </div>
  );
}
