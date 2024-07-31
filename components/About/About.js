import React, { useEffect } from "react";
import Link from "next/link";
import sal from "sal.js";
import checkmarkIcon from "../../public/images/icons/checkmark.svg";
import useravatarIcon from "../../public/images/icons/useravatar.svg";
import Image from "next/image";

const About = () => {
  useEffect(() => {
    sal();
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-12">
          <div
            className="section-title text-center"
            data-sal="slide-"
            data-sal-duration="300"
            data-sal-delay="100"
          >
            <h2 className="title fw-600 mb-4">About us</h2>
            <p className="description b1 text-black">
              Discover how <Link href="/">Ablarva</Link> unlocks new levels of
              efficiency, creativity, and success for you.
            </p>
          </div>
        </div>
      </div>
      <div
        className="about-content"
        // data-sal="slide-down"
        // data-sal-duration="700"
        // data-sal-delay="100"
      >
        <h3>What is Ablarva?</h3>
        <p className="text-black">
          Welcome to Ablarva, your advanced AI assistant platform designed to
          revolutionize productivity and efficiency in various domains.
        </p>
        <h3>Mission</h3>
        <p className="text-black">
          At Ablarva, our mission is to empower individuals and businesses with
          cutting-edge AI technology, providing tailored solutions to enhance
          their operations and achieve their goals.
        </p>
        <h3>What We Offer</h3>
        <p className="text-black">Ablarva offers a wide range of AI-powered services, including:</p>
        <ul className="service-list">
          <li className="list-unstyled d-flex gap-4 text-black">
            <Image
              src={checkmarkIcon}
              alt="Checkmark Icon"
              width={20}
              height={20}
            />
            Email Marketing: Streamline your email campaigns with personalized
            assistance.
          </li>
          <li className="list-unstyled d-flex gap-4 text-black">
            <Image
              src={checkmarkIcon}
              alt="Checkmark Icon"
              width={20}
              height={20}
            />
            Presentation Creation: Create impactful presentations effortlessly
            with AI support.
          </li>
          <li className="list-unstyled d-flex gap-4 text-black">
            <Image
              src={checkmarkIcon}
              alt="Checkmark Icon"
              width={20}
              height={20}
            />
            Project Management: Manage projects efficiently and effectively with
            AI-driven tools.
          </li>
          <li className="list-unstyled d-flex gap-4 text-black">
            <Image
              src={checkmarkIcon}
              alt="Checkmark Icon"
              width={20}
              height={20}
            />
            Digital Marketing Assistance: Receive expert guidance and support
            for your digital marketing endeavors.
          </li>
        </ul>
        <h3>How Ablarva Works</h3>
        <p className="text-black">
          Ablarva leverages advanced artificial intelligence to understand and
          execute tasks based on user requests. Our intuitive interface allows
          you to interact seamlessly with your AI assistant, making productivity
          gains accessible to everyone.
        </p>
        <h3>Choosing the Right AI Assistant</h3>
        <p className="text-black">Meet our specialized AI assistants:</p>
        <ul className="assistant-list link-hover">
          <li className="list-unstyled d-flex gap-4 text-black">
            <Image
              src={useravatarIcon}
              alt="User Avatar Icon"
              width={20}
              height={20}
            />
            <Link href="adam">Adam:</Link> Email marketing expert
          </li>
          <li className="list-unstyled d-flex gap-4 text-black">
            <Image
              src={useravatarIcon}
              alt="User Avatar Icon"
              width={20}
              height={20}
            />
            <Link href="sophia">Sophia:</Link> Presentation creation specialist
          </li>
          <li className="list-unstyled d-flex gap-4 text-black">
            <Image
              src={useravatarIcon}
              alt="User Avatar Icon"
              width={20}
              height={20}
            />
            <Link href="brahim">Brahim:</Link> Project management guru
          </li>
          <li className="list-unstyled d-flex gap-4 text-black">
            <Image
              src={useravatarIcon}
              alt="User Avatar Icon"
              width={20}
              height={20}
            />
            <Link href="sara">Sara:</Link> Digital marketing virtuoso
          </li>
        </ul>
        <p className="text-black">
          Review their profiles to find the perfect match for your needs. Need
          assistance? Our team is here to guide you towards the best choice.
        </p>
        <h3>Subscription Plans</h3>
        <p className="text-black">
          Choose from a range of subscription plans tailored to your
          requirements and budget. Enjoy flexibility and scalability with our
          basic to premium options, each offering a specific number of requests
          per month.
        </p>
        <h3>Data Security and Privacy</h3>
        <p className="text-black">
          Rest assured, your data is safe with Ablarva. We employ
          state-of-the-art encryption and adhere to strict data protection
          regulations to ensure the confidentiality and security of your
          information.
        </p>
        <h3>Dedicated Support</h3>
        <p className="text-black">
          Encountering issues? Our dedicated support team is available 24/7 to
          provide assistance. Reach out via email or phone for prompt resolution
          of any queries or concerns.
        </p>
        <h3>Experience the Future with Ablarva</h3>
        <p className="text-black">
          Join us in embracing the future of productivity with Ablarva. Let our
          AI assistants empower you to achieve more, faster, and with greater
          ease.
        </p>
      </div>
    </div>
  );
};

export default About;
