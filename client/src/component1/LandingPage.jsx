import React from "react";
import FooterTextareaContainer1 from "../component/FooterTextareaContainer1";
import HealthSupportContainer from "../component/HealthSupportContainer";
import HelpSupportContainer from "../component/HelpSupportContainer";
import AboutUnheardContainer from "../component/AboutUnheardContainer";
import NavigationContainer from "../component/NavigationContainer";
import EmpowermentContainer from "../component/EmpowermentContainer";
import Landpic from './images/landpic.png';
import Womenblog from './images/womenblog.png';
import Womensafety from './images/womensafety.jpeg';
import Ngoblog from './images/ngoblog.png';

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
        className="absolute top-[3849.59px] left-[56px] w-[1043px] h-[494px] flex flex-col pt-[9px] px-0 pb-0 box-border items-start justify-start gap-[51px]"
        data-scroll-to="land5Container"
      >
        <div className="relative font-semibold" >
          <span>B</span>
          <span className="text-gray-300">logs</span>
        </div>
        <div className="relative  w-[1043px] h-[349px] shrink-0 flex flex-row items-center text-lg justify-center gap-[52px] text-gray-300">
          <div className="relative rounded-lg left-[50px] bg-lightpink [backdrop-filter:blur(4px)] box-border w-[313.8px] h-[349.8px] shrink-0 border-[0.8px] border-solid border-red-100" > 
          
        <img
        className="relative rounded-lg flex flex-center top-[5px] left-[6px] w-[300px] h-[175px]" 
        alt="" 
        src={Womenblog}
        />
        <div className="relative top-5">
        3 Daily Habits That Will Positively Affect and Protect Your Mental Health Starting simple with daily habits can work wonders in improving your mental health.
        </div>
        <a href="https://gc4women.org/category/gc4w-womens-health-and-wellness/?gclid=CjwKCAjwrJ-hBhB7EiwAuyBVXd_LCwI_8W4oVlqFww-pA3zGzIYdYdCRZtYwZm9FJ0vh1BAXX-7FaRoCEtUQAvD_BwE"  >
        <button className=" relative top-7  rounded-sm h-8 bg-red-100  text-lavenderblush-200"> Read More </button>
        </a>
          </div>
          <div className="relative left-[50px] rounded-lg bg-lightpink [backdrop-filter:blur(4px)] box-border w-[313.8px] h-[349.8px] shrink-0 border-[0.8px] border-solid border-red-100" >
          <img
        className="relative rounded-lg flex flex-center top-[5px] left-[6px] w-[300px] h-[175px]" 
        alt="" 
        src={Womensafety}
        />
        <div className="relative top-5">
        In the last few years, the level of safety of women is constantly falling. The reason behind this is the continuing increase in crime.  </div>
        <a href="https://www.iilsindia.com/blogs/women-safety/"  >
        <button className=" relative  rounded-sm h-8 top-12 bg-red-100  text-lavenderblush-200"> Read More </button>
        </a>
        </div>
          <div className="relative left-[50px] rounded-lg bg-lightpink [backdrop-filter:blur(4px)] box-border w-[313.8px] h-[349.8px] shrink-0 border-[0.8px] border-solid border-red-100" >
          <img
        className="relative rounded-md flex flex-center top-[5px] left-[6px] w-[300px] h-[175px]" 
        alt="" 
        src={Ngoblog}
        />
        <div className="relative top-5">
        My life always consisted of struggles, which I face even today but I have risen from the ashes and continue to fight every day - Shahjahan Mirza </div>        
        <a href="http://coroindia.org/blog/my-life-always-consisted-of-struggles-which-i-face-even-today-but-i-have-risen-from-the-ashes-and-continue-to-fight-every-day-shahjahan-mirza"  >
        <button className=" relative rounded-sm  h-8 top-7 bg-red-100  text-lavenderblush-200"> Read More </button>
        </a>
        </div>
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
