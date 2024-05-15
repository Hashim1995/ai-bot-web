import React, { useEffect } from "react";
import sal from "sal.js";

import "venobox/dist/venobox.min.css";

import TimnelineData from "../../data/home.json";
import Link from "next/link";

const Timeline = () => {
  useEffect(() => {
    sal();

    import("venobox/dist/venobox.min.js").then((venobox) => {
      new venobox.default({
        selector: ".popup-video",
        maxWidth: window.innerWidth >= 992 ? "50%" : "100%",
      });
    });
  }, []);
  return (
    <>
      <div className="rainbow-timeline-area rainbow-section-gap" data-white-overlay="1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="100"
              >
                <h4 className="subtitle ">
                  <span className="theme-gradient">HOW IT WORKS</span>
                </h4>
                <h2 className="title w-600 mb--20">
                  Simple Steps to Smarter Assistance
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 offset-lg-1 mt--30">
            {/* bg-color-blackest is deleted */}
              <div className="timeline-style-two bg-flashlight box-shadow-cards-primary">
                <div className="row row--0">
                  {TimnelineData &&
                    TimnelineData.timeline.map((data, index) => (
                      <div
                        className="col-lg-2 col-md-2 rainbow-timeline-single dark-line"
                        key={index}
                      >
                        <div className="rainbow-timeline">
                          <h6
                            className="title"
                            style={{ height: "3em", overflow: "hidden" }}
                            data-sal="slide-up"
                            data-sal-duration="700"
                            data-sal-delay="200"
                          >
                            {data.title}
                          </h6>
                          <div className="progress-line">
                            <div className="line-inner"></div>
                          </div>
                          <div className="progress-dot">
                            <div className="dot-level">
                              <div className="dot-inner"></div>
                            </div>
                          </div>
                          <p
                            className="description"
                            data-sal="slide-up"
                            data-sal-duration="700"
                            data-sal-delay="300"
                          >
                            {data.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div className="button-group mt--50 text-center">
                <a
                  style={{
                    cursor: "pointer",
                  }}
                  className="btn-default cursor-pointer bg-light-gradient btn-large"
                  href="https://app.aizade.az" // Ensure your URL is complete with http:// or https://
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="has-bg-light"></div>
                  <span>Start writing for free</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
