import React from "react";
import scratchcard from "../assets/thumbnails/scratchcard.png";
import wizarding from "../assets/thumbnails/wizarding.png";
import zbspro from "../assets/thumbnails/zbspro.png";

export default function Outreach() {
  return (
    <div className="outreach d-flex  justify-content-around flex-wrap">
      <div className="fs-5 fw-bold text-center px-5">
        <p>
          In 2022, a Memorandum of Understanding (MOU) was signed between the
          Ministry of Education (MOE), The Ngee Ann Kongsi (NAK) and SPH Media
          Trust (SMT). Under the MOU, NAK committed to making an annual donation
          of S$2.5 million for the subscription of SMT's newspapers and student
          publications for all secondary school students from 2022 to 2027.
        </p>
        <p>
          Students studying the Chinese language will receive a ZBSchools.sg
          digital account, which they can use to access the learning platform
          and its student publication, zbCOMMA. This initiative aims to support
          secondary school students in their mother tongue language-learning.
        </p>
        <p>
          As part of the initiative, I launched multiple campaigns to increase
          the outreach of the digital platform ZBSchools.sg among secondary
          school students and teachers.
        </p>
      </div>
      <div className="card-container d-flex mt-5">
        <a
          href="https://www.zbschools.sg/scratchcard_luckydraw"
          className="text-decoration-none"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="card mx-4 border-0">
            <img
              src={scratchcard}
              className="card-img"
              alt="scratchcard-giveaway"
            />
            <div className="card-img-overlay card-text">
              <h6 className="text-uppercase bg-primary text-secondary mb-2 py-1 px-1 fw-bold fs-5">
                LAUNCHED IN 2022
              </h6>
              <p>
                For widespread awareness of the initiative, scratchcards were
                distributed to 120,000 students across all local secondary
                schools.
              </p>
              <p>
                The scratchcard included a short introduction to the platform
                and a chance to win a cup of bubble tea. Students were also
                encouraged to access the platform for a prize giveaway.
              </p>
              <p>
                This approach combines the excitement of rewards with the
                curiosity of exploring a new platform, providing an immediate
                incentive for students to engage and participate.
              </p>
            </div>
          </div>
          <h5 className="card-title text-dark fs-3">Scratchcard Giveaway</h5>
        </a>
      </div>
      <div className="card-container d-flex mt-5">
        <a
          href="https://www.zbschools.sg/wizarding101"
          className="text-decoration-none"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="card mx-4 border-0">
            <img src={wizarding} className="card-img" alt="wizarding101" />
            <div className="card-img-overlay card-text">
              <h6 className="text-uppercase bg-primary text-secondary mb-2 py-1 px-1 fw-bold fs-5">
                LAUNCHED IN 2023
              </h6>
              <p>
                The campaign features an enchanting theme to capture students'
                imaginations and create an engaging atmosphere around the
                learning platform. An instructional video and guide were
                produced to help students easily navigate the platform.
              </p>
              <p>
                Notepads with vibrant, magical designs were distributed to all
                Secondary 1 and 2 students. These notepads are not only
                attractive and useful for daily activities but also serve to
                promote the platform. This approach creates a tangible
                connection to the initiative, encouraging students to explore
                and use ZBSchools.sg.
              </p>
            </div>
          </div>
          <h5 className="card-title text-dark fs-3">Wizarding 101</h5>
        </a>
      </div>
      <div className="card-container d-flex mt-5">
        <a
          href="https://www.zbschools.sg/zbspro"
          className="text-decoration-none"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="card mx-4 border-0">
            <img src={zbspro} className="card-img" alt="zbschools-pro" />
            <div className="card-img-overlay card-text">
              <h6 className="text-uppercase bg-primary text-secondary mb-2 py-1 px-1 fw-bold fs-5">
                LAUNCHED IN 2024
              </h6>
              <p>
                A marketing case competition was launched for secondary school
                students, providing an opportunity to apply problem-solving and
                strategic thinking skills. Participants developed marketing
                strategies to promote ZBSchools.sg to their peers. Shortlisted
                teams executed their plans in school for three months before
                presenting to a judging panel.
              </p>
              <p>
                This competition fostered creativity and analytical skills. By
                involving students directly, the initiative aimed to create more
                effective and relatable marketing strategies, enhancing the
                platform's reach within the student community.
              </p>
            </div>
          </div>
          <h5 className="card-title text-dark fs-3">ZBSchools PRO</h5>
        </a>
      </div>
    </div>
  );
}
