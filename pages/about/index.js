import React from "react";
import PageHead from "../Head";
import Context from "@/context/Context";
import HeaderDashboard from "@/components/Header/HeaderDashboard";
import PopupMobileMenu from "@/components/Header/PopupMobileMenu";
import LeftpanelDashboard from "@/components/Common/LeftpanelDashboard";
import TermsPolicy from "@/components/TermsPolicy/TermsPolicy";
import Header from "@/components/Header/Header";
import About from "@/components/About/About";

const AboutPage = () => {
  return (
    <>
      <PageHead title="About Us" />

      <main className="page-wrapper rbt-dashboard-page bg-white-page">
           <About />
      </main>
    </>
  );
};

export default AboutPage;
