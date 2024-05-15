import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";

import sal from "sal.js";

const ServiceItem = ({ ServiceData, icons }) => {
  useEffect(() => {
    sal();

    const cards = document.querySelectorAll(".bg-flashlight");

    cards.forEach((bgflashlight) => {
      bgflashlight.onmousemove = function (e) {
        let x = e.pageX - bgflashlight.offsetLeft;
        let y = e.pageY - bgflashlight.offsetTop;

        bgflashlight.style.setProperty("--x", x + "px");
        bgflashlight.style.setProperty("--y", y + "px");
      };
    });
  }, []);

  return (
    <>
      {ServiceData &&
        ServiceData.service.map((data, index) => (
          <div
            className="col-lg-4 col-md-6 col-sm-6 col-12"
            data-sal="slide-up"
            data-sal-duration="700"
            data-sal-delay={`${data.delay}`}
            key={index}
          >
            {/* bg-color-blackest  is dleeted */}
            <div className="service service__style--1 box-shadow-cards-primary radius mt--25 text-center rbt-border-none variation-4 bg-flashlight">
              <div className="icon">
                {/* <i className={`feather-${data.icon}`}></i> */}
                <Image 
                 src={icons[index]}
                 alt="icon"
                 width={45}
                 height={45}
                 className="object-fit-cover"
                 style={{ height: "45px", width: "45px" }}
                />
              </div>
              <div className="content" style={{ height: '190px' }}> {/* Set a fixed height */}
                <h4 className="title w-600">
                  <Link href="#">{data.title}</Link>
                </h4>
                 {/* color-gray is delelted */}
                <p className="description b1  mb--0">{data.desc}</p>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default ServiceItem;
