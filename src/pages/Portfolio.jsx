import React from "react";

export default function Portfolio() {
  return (
    <div className="container my-4">
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
      <ul>
        <li>
          <a
            href="https://github.com/koyostar/travel-buddy"
            target="_blank"
            rel="noopener noreferrer"
          >
            REACT App - Travel Buddy
          </a>
        </li>
        <li>
          <a
            href="https://github.com/koyostar/DDNoMore_FE"
            target="_blank"
            rel="noopener noreferrer"
          >
            MERN Stack App - DD NO MORE
          </a>
        </li>
        <li>
          <a
            href="https://github.com/koyostar/smart-spender-fe"
            target="_blank"
            rel="noopener noreferrer"
          >
            MERN Stack App - Smart Spender
          </a>
        </li>
      </ul>
    </div>
  );
}
