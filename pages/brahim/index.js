import React, { useEffect } from "react";
import Image from "next/image";
import sal from "sal.js";
import Assistant3 from "../../public/images/assistants/brahim.webp";

const About = () => {
  useEffect(() => {
    sal();
  }, []);

  return (
    <div className="assistants-style-1 active-light-mode">
      {/* Upper Part */}
      <div className="bg-style-1 py-5">
        <div className="container">
          <div
            className="row align-items-center"
            data-sal="slide-right"
            data-sal-duration="700"
            data-sal-delay="100"
          >
            <div className="col-md-6">
              <h2 className="title">
                Hello, I'm
                <span className="theme-gradient underlined underline-mask"> Brhaim</span>
                <br />
                Email Marketing Assistant
              </h2>
            </div>
            <div className="col-md-6 d-flex justify-content-md-end justify-content-center">
              <div className="frame-image frame-image-bottom bg-flashlight video-popup icon-center">
                <Image
                  src={Assistant3.src}
                  alt="Brhaim"
                  className="img-fluid assistant-image"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Part */}
      <div className="bg-style-2 py-5">
        <div className="container">
          <div
            className="row align-items-center"
            data-sal="slide-left"
            data-sal-duration="700"
            data-sal-delay="100"
          >
            <div className="col-md-6 d-flex justify-content-md-start justify-content-center">
              <div className="frame-image frame-image-bottom bg-flashlight video-popup icon-center">
                <Image
                  src={Assistant3.src}
                  width={400}
                  height={400}
                  alt="Brhaim Features"
                  className="img-fluid assistant-image"
                />
              </div>
            </div>
            <div className="col-md-6 d-flex flex-column align-items-md-end align-items-center">
              <h2 className="title">Features</h2>
              <ul className="feature-list text-black">
                <li className="text-black">AI-powered technical documentation generation.</li>
                <li className="text-black">Intelligent note-taking and summarization.</li>
                <li className="text-black">Voice-to-text transcription for meetings.</li>
                <li className="text-black">Integration with project management tools.</li>
                <li className="text-black">Task prioritization and deadline reminders.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="button-group d-flex justify-content-center my-4">
        <a
          className="btn-default cursor-pointer bg-light-gradient btn-large"
          href="https://app.aizade.az"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="has-bg-light"></div>
          <span>Try It Now</span>
        </a>
      </div>
    </div>
  );
};

export default About;
