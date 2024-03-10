import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const CardWithAvatar = ({ title, description, imageUrl, functions, buttonUrl }) => {
  const cardBodyRef = useRef(null);

  useEffect(() => {
    // Calculate the maximum height among all card bodies
    const maxCardBodyHeight = Math.max(
      ...Array.from(document.querySelectorAll(".pricing-body")).map(
        (body) => body.clientHeight
      )
    );

    // Apply the maximum height to all card bodies
    Array.from(document.querySelectorAll(".pricing-body")).forEach(
      (body) => (body.style.height = `${maxCardBodyHeight}px`)
    );
  }, []);

  return (
    <div className="col-lg-3 col-md-6 col-12">
      <div className={`rainbow-pricing style-2`}>
        <div className="pricing-table-inner bg-flashlight pt--20 px-lg-5 d-flex flex-column align-items-center">
          <Image
            src={imageUrl}
            alt="Avatar"
            width={150}
            height={150}
            className="rounded-circle object-fit-cover"
            style={{ height: "150px", width: "150px" }}
          />

          <div className="separator-animated animated-true mt--30 mb--30"></div>

          <div className="pricing-header ">
            <h4 className="title">{title}</h4>
            <p>{description}</p>
            <div ref={cardBodyRef} className="pricing-body">
              <ul className="">
                {functions?.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardWithAvatar;
