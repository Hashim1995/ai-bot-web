import Image from "next/image";

import splitImg from "../../public/images/split/split-8.png";
import Link from "next/link";

const Split = () => {
  return (
    <>
      <div className="rainbow-split-area rainbow-section-gap">
        <div className="container">
          <div className="rainbow-splite-style">
            <div className="split-wrapper">
              <div className="row g-0 radius-10 align-items-center">
                <div className="col-lg-12 col-xl-6 col-12">
                  <div className="thumbnail">
                    <Image
                      className="radius"
                      src={splitImg}
                      alt="split Images"
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-xl-6 col-12">
                  <div className="split-inner">
                    <h4
                      className="title"
                      data-sal="slide-up"
                      data-sal-duration="400"
                      data-sal-delay="200"
                    >
                      Let’s Connect: Reach Out to AI-zadə
                    </h4>
                    <p
                      className="description"
                      data-sal="slide-up"
                      data-sal-duration="400"
                      data-sal-delay="300"
                    >
                      Your thoughts, questions, and collaborations matter to us.
                      Whether you’re curious about AI-zadə, need support, or
                      have feedback to share, our team is ready to listen and
                      assist. Contact us today, and let’s make the future of AI
                      assistance brighter together.
                    </p>
                    <div className="icon fs-1 d-flex align-items-center gap-3">
                      <i className="feather-phone"></i>
                      <span className="fs-3">+994515215376 </span> 
                    </div>
                    <div className="icon fs-1 d-flex align-items-center gap-3">
                      <i className="feather-mail"></i>
                      <span className="fs-3">info@ablarva.com </span> 
                    </div>
                    {/* <ul
                      className="split-list"
                      data-sal="slide-up"
                      data-sal-duration="400"
                      data-sal-delay="350"
                    >
                      <li>- Craft Articles in Under 20 Seconds.</li>
                      <li>- Reclaim Hundreds of Valuable Hours with AI</li>
                      <li>- Elevate Copywriting with Rewriter.</li>
                    </ul>
                    <div
                      className="view-more-button mt--35"
                      data-sal="slide-up"
                      data-sal-duration="400"
                      data-sal-delay="400"
                    >
                      <Link className="btn-default" href="/contact">
                        Contact With Us
                      </Link>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Split;
