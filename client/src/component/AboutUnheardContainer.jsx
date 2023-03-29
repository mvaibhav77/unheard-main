import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import About from './images/about.png'
  

const AboutUnheardContainer = () => {
  const navigate = useNavigate();

  const onLearnMoreContainer2Click = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  return (
    <div
      className="absolute top-[870px] left-[61px] w-[1150px] h-[552.79px] text-left text-51xl text-gray-300 font-montserrat"
      data-scroll-to="land2Container"
    >
      <div className="absolute top-[-50px] left-[-63px] bg-white w-[1285px] h-[674px]" />
      <div className="absolute top-[calc(50%_-_276.4px)] left-[calc(50%_-_575px)] font-semibold flex items-center w-[720px]">
        <span className="[line-break:anywhere] w-full">
          <span>{`About `}</span>
          <span className="text-red-100">Un</span>
          <span>heard</span>
        </span>
      </div>
      <div className="absolute top-[138px] left-[0px] w-[1150px] h-[414.79px] text-5xl text-black">
        <img
          className="absolute top-[-2.75px] left-[-4.07px] w-[492.82px] h-[424.29px]"
          alt=""
          src={About}
        />
        <div className="absolute top-[58px] left-[572px] w-[578px] h-[299px]">
          <div className="absolute top-[0px] left-[0px] w-[578px] h-[198px]">
            <div className="absolute top-[111px] left-[0px] font-medium flex items-center w-[541.58px]">{`Lorem ipsum dolor sit amet. Est voluptatem culpa ut iste voluptas aut dolore repudiandae. Non similique totam `}</div>
            <div className="absolute top-[0px] left-[0px] font-medium flex items-center w-[578px]">{`Lorem ipsum dolor sit amet. Est voluptatem culpa ut iste voluptas aut dolore repudiandae. Non similique totam `}</div>
          </div>
          <div
            className="absolute top-[246px] left-[0px] w-[200.33px] h-[53px] cursor-pointer text-center text-white"
            onClick={onLearnMoreContainer2Click}
          >
            <div className="absolute top-[-2px] left-[-2px] rounded bg-red-100 box-border w-[204.33px] h-[57px] border-[2px] border-solid border-white" />
            <div className="absolute top-[12px] left-[30px] font-semibold">
              Learn More
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUnheardContainer;
