import React from "react";
import FooterTextareaContainer1 from "../component/FooterTextareaContainer1";
import HealthSupportContainer from "../component/HealthSupportContainer";
import HelpSupportContainer from "../component/HelpSupportContainer";
import AboutUnheardContainer from "../component/AboutUnheardContainer";
import NavigationContainer from "../component/NavigationContainer";
import EmpowermentContainer from "../component/EmpowermentContainer";
import Landpic from './images/landpic.png';


const LandingPage = () => {
  return (
    <div className="relative bg-lavenderblush-200 w-full h-[4934px] overflow-hidden text-center text-51xl text-red-100 font-montserrat">
      <div className="absolute top-[2587px] left-[0px] bg-white w-[1280px] h-[1201px]" />
      <img
        className="absolute top-[95px] left-[785px] w-[465px] h-[675px]"
        alt=""
        src={Landpic}
      />
      <FooterTextareaContainer1 />
      <div
        className="absolute top-[3849.59px] left-[6px] w-[1043px] h-[494px] flex flex-col pt-[9px] px-0 pb-0 box-border items-start justify-start gap-[51px]"
        data-scroll-to="land5Container"
      >
        <div className="relative font-semibold">
          <span>B</span>
          <span className="text-gray-300">logs</span>
        </div>
        <div className="w-[1043px] h-[349px] shrink-0 flex flex-row items-center justify-center gap-[52px]">
          <div className="relative rounded-lg bg-lightpink [backdrop-filter:blur(4px)] box-border w-[313.8px] h-[349.8px] shrink-0 border-[0.8px] border-solid border-red-100" />
          <div className="relative rounded-lg bg-lightpink [backdrop-filter:blur(4px)] box-border w-[313.8px] h-[349.8px] shrink-0 border-[0.8px] border-solid border-red-100" />
          <div className="relative rounded-lg bg-lightpink [backdrop-filter:blur(4px)] box-border w-[313.8px] h-[349.8px] shrink-0 border-[0.8px] border-solid border-red-100" />
        </div>
      </div>
      <HealthSupportContainer />
      <HelpSupportContainer />
      <AboutUnheardContainer />
      <div
        className="absolute top-[21px] left-[61px] w-[1402px] h-[725px]"
        data-scroll-to="land1Container"
      >
        <img
          className="absolute top-[67px] left-[737px] w-[465px] h-[675px] object-cover"
          alt=""
          src={Landpic}
        />
        <NavigationContainer />
        <EmpowermentContainer />
      </div>
    </div>
  );
};

export default LandingPage;
