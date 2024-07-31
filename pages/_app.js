import { Router } from "next/router";
import React, { useEffect, useState } from "react";

import "bootstrap/scss/bootstrap.scss";

// ========= Plugins CSS START =========
import "../public/css/plugins/feature.css";
import "../public/css/plugins/animation.css";
import "../node_modules/sal.js/dist/sal.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-tooltip/dist/react-tooltip.css";
import "../public/scss/template/_lightmode.scss";
// ========= Plugins CSS END =========

import "../public/scss/style.scss";
import Loading from "@/components/Loading/Loading";
import Context from "@/context/Context";
import PageHead from "./Head";
import Header from "@/components/Header/Header";
import PopupMobileMenu from "@/components/Header/PopupMobileMenu";
import Footer from "@/components/Footer/Footer";
import Copyright from "@/components/Footer/Copyright";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");

    const handleStart = (url) => url !== Router.asPath && setLoading(true);
    const handleComplete = () => setLoading(false);

    Router.events.on("routeChangeStart", handleStart);
    Router.events.on("routeChangeComplete", handleComplete);
    Router.events.on("routeChangeError", handleComplete);

    return () => {
      Router.events.off("routeChangeStart", handleStart);
      Router.events.off("routeChangeComplete", handleComplete);
      Router.events.off("routeChangeError", handleComplete);
    };
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="active-light-mode ">
          <PageHead title="About Us" />

          <main className="page-wrapper rbt-dashboard-page">
            <Context>
              <Header
                headerTransparent="header-not-transparent"
                headerSticky="header-sticky"
                btnClass="btn-small round"
              />
              <PopupMobileMenu />
              <div className="bg-white-page">
                <Component {...pageProps} />
              </div>
              <Footer />
              <Copyright />
            </Context>
          </main>
        </div>
      )}
    </>
  );
}
