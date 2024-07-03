import { useState } from "react";
import panda from "./assets/Panda.png";
import babyPanda from "./assets/Baby Panda.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>WORK IN PROGRESS</h1>
      <div>
        <p>
          Hi! I'm Shermaine and this is my portfolio site. Pardon me but it is
          still under development.
        </p>
        <p>⬇️⬇️⬇️ Meanwhile, visit my GitHub! ⬇️⬇️⬇️</p>
        <a href="https://github.com/koyostar" target="_blank">
          <img src={panda} className="panda" alt="Go to my github" />
        </a>
        <a href="https://github.com/koyostar/thePandaGame" target="_blank">
          <img src={babyPanda} className="babypanda" alt="my first game" />
        </a>
        <a href="https://github.com/koyostar/travel-buddy" target="_blank">
          <img src={babyPanda} className="babypanda" alt="travel planner app" />
        </a>
        <a href="https://github.com/koyostar/DDNoMore_FE" target="_blank">
          <img
            src={babyPanda}
            className="babypanda"
            alt="task management app"
          />
        </a>
      </div>
      <div className="card">
        <p>OR</p>
        <a href="mailto:shermaine.lsh@gmail.com?subject=Hi%20Shermaine&body=Hi%20Shermaine,%0D%0A%0D%0A">
          <button>Send me an email</button>
        </a>
      </div>
    </>
  );
}

export default App;
