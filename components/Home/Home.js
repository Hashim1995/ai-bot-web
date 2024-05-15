import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import "venobox/dist/venobox.min.css";

import bannerImg from "../../public/images/banner/ai1.jpg";
import separator from "../../public/images/separator/separator-top.svg";

const Home = () => {
  const features = [
    "Discovers leads with 250 million contacts & 65 data points",
    "Writes & sends bespoke email sequences to 1000s of prospects",
    "Replies to prospects’ questions",
    "Books meetings into SDRs’ calendars",
  ];

  // useEffect(() => {
  //   import("venobox/dist/venobox.min.js").then((venobox) => {
  //     new venobox.default({
  //       selector: ".popup-video",
  //       maxWidth: window.innerWidth >= 992 ? "50%" : "100%",
  //     });
  //   });
  // }, []);
  return (
    <>
      <div
        className="slider-area slider-style-1 variation-default slider-bg-image bg-banner1"
        data-white-overlay="1"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="inner text-center mt--60">
                <h1 className="title display-one">
                  Unlock The Future of Productivity and Creativity With <br />
                  <span className="theme-gradient">ABLARVA</span>
                  <br />
                  {/* <span className="color-off"></span> */}
                </h1>
                <p className="b1 desc-text">
                  Your Personal AI Assistant Designed to Streamline Your Life
                  and Work
                </p>
                <div className="button-group">
                  <a
                    className="btn-default cursor-pointer bg-light-gradient btn-large"
                    href="https://app.aizade.az" // Ensure your URL is complete with http:// or https://
                    target="_blank"
                    style={{
                      cursor: "pointer",
                    }}
                    rel="noopener noreferrer"
                  >
                    <div className="has-bg-light"></div>
                    <span>Start writing for free</span>
                  </a>
                  {/* <Link
                    className="btn-default  bg-light-gradient btn-large"
                    href="https://www.app.aizade.az"
                    passHref
                    target="_blank"
                  >
                    <div className="has-bg-light"></div>
                    <span>Start writing for free</span>
                  </Link> */}
                </div>
                <p className="color-gray mt--5">💳 No credit card required!</p>
              </div>
            </div>
            <div className="col-lg-10 col-xl-10 order-1 order-lg-2">
              <div className="frame-image frame-image-bottom bg-flashlight video-popup icon-center">
                <Image src={bannerImg} alt="Banner Images" />
                {/* <div className="video-icon">
                  <Link
                    className="btn-default rounded-player popup-video border bg-white-dropshadow"
                    href="https://youtu.be/ThRYF96HIzA?si=Yz-Yc5HSf8uLPv-G"
                    data-vbtype="video"
                  >
                    <span>
                      <i className="feather-play"></i>
                    </span>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="chatenai-separator has-position-bottom">
          {/* <Image className="w-100" src={separator} alt="" /> */}
        </div>
      </div>
    </>
  );
};

export default Home;
