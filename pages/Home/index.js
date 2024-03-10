import Header from "@/components/Header/Header";
import HeaderTop from "@/components/Header/HeaderTop/Header-Top";
import PopupMobileMenu from "@/components/Header/PopupMobileMenu";
import Home from "@/components/Home/Home";
import Service from "@/components/Service/Service";
import Context from "@/context/Context";
import Separator from "../separator";
import Timeline from "@/components/Timeline/Timeline";
import Split from "@/components/Split/Split";
import Pricing from "@/components/Pricing/Pricing";
import Accordion from "@/components/Accordion/Accordion";
import Brands from "@/components/Brands/Brands";
import CallToAction from "@/components/CallToAction/CallToAction";
import Footer from "@/components/Footer/Footer";
import Copyright from "@/components/Footer/Copyright";
import PageHead from "../Head";
import CardsWithAvatarSection from "@/components/CardsWithAvatarSection/CardsWithAvatarSection";

const HomePage = () => {
  return (
    <>
      <PageHead title="Home" />

      <main className="page-wrapper">
        <Context>
          {/* <HeaderTop /> */}
          <Header
            headerTransparent="header-not-transparent"
            headerSticky="header-sticky"
            btnClass="btn-small round"
          />
          <PopupMobileMenu />

          <Home />
          <div id="AI-Zades">

          <CardsWithAvatarSection/>
          </div>
          <Separator top={false} />
          <div id="about">

          <Service />
          </div>
          <Separator top={true} />
          <div id="time-line">

          <Timeline />
          </div>
          <Separator top={false} />
         
          <div id="faq">
          <Accordion isHead={true} />
          </div>
          {/* <Separator top={false} /> */}
          {/* <Brands /> */}
          {/* <Separator top={false} /> */}
          {/* <CallToAction /> */}
          <Separator top={true} />
          <Split />
          {/* <Separator top={true} /> */}
          {/* <Pricing /> */}
         
          <Footer />  
          <Copyright />
        </Context>
      </main>
    </>
  );
};

export default HomePage;
