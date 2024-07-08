import React from "react";
import panda from "../assets/Panda.png";
import babyPanda from "../assets/BabyPanda.png";

export default function Home() {
  return (
    <div className="container text-center">
      <h1 className="my-4">WORK IN PROGRESS</h1>
      <div className="mb-4">
        <p>
          Hi! I'm Shermaine and this is my portfolio site. Pardon me but it is
          still under development.
        </p>
        <p>⬇️⬇️⬇️ Meanwhile, visit my GitHub! ⬇️⬇️⬇️</p>
        <a
          href="https://github.com/koyostar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={panda} className="panda" alt="Go to my github" />
        </a>
        <a
          href="https://github.com/koyostar/thePandaGame"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={babyPanda} className="babypanda" alt="my first game" />
        </a>
        <a
          href="https://github.com/koyostar/travel-buddy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={babyPanda} className="babypanda" alt="travel planner app" />
        </a>
        <a
          href="https://github.com/koyostar/DDNoMore_FE"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={babyPanda}
            className="babypanda"
            alt="task management app"
          />
        </a>
      </div>
      <div className="p-4">
        <p>OR</p>
        <a href="mailto:shermaine.lsh@gmail.com?subject=Hi%20Shermaine&body=Hi%20Shermaine,%0D%0A%0D%0A">
          <button className="btn btn-primary">Send me an email</button>
        </a>
      </div>
    </div>
  );
}
