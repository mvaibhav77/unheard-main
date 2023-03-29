import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Handshelp from './images/handshelp.png';

const HelpSupportContainer = () => {
  const navigate = useNavigate();

  const onRectangle9Click = useCallback(() => {
    navigate("/ngo-details");
  }, [navigate]);

  const onRectangle10Click = useCallback(() => {
    navigate("/ngo-details");
  }, [navigate]);

  const onRectangle11Click = useCallback(() => {
    navigate("/ngo-details");
  }, [navigate]);

  const onLearnMoreContainer1Click = useCallback(() => {
    navigate("/ngo-search1");
  }, [navigate]);

  return (
    <div
      className="absolute top-[1546.79px] left-[61px] w-[1224px] h-[977.79px] text-left text-5xl text-white font-montserrat"
      data-scroll-to="land3Container"
    >
      <div className="absolute top-[628.79px] left-[0px] w-[1043px] h-[349px]">
        <div
          className="absolute top-[-0.4px] left-[-0.4px] rounded-lg bg-lightpink [backdrop-filter:blur(4px)] box-border w-[313.8px] h-[349.8px] cursor-pointer border-[0.8px] border-solid border-red-100"
          onClick={onRectangle9Click}
        />
        <div
          className="absolute top-[-0.4px] left-[729.6px] rounded-lg bg-lightpink [backdrop-filter:blur(4px)] box-border w-[313.8px] h-[349.8px] cursor-pointer border-[0.8px] border-solid border-red-100"
          onClick={onRectangle10Click}
        />
        <div
          className="absolute top-[-0.4px] left-[364.6px] rounded-lg bg-lightpink [backdrop-filter:blur(4px)] box-border w-[313.8px] h-[349.8px] cursor-pointer border-[0.8px] border-solid border-red-100"
          onClick={onRectangle11Click}
        />
      </div>
      <div className="absolute top-[127.79px] left-[0px] w-[660px] h-[324px] text-center">
        <div
          className="absolute top-[271px] left-[0px] w-[236px] h-[53px] cursor-pointer"
          onClick={onLearnMoreContainer1Click}
        >
          <div className="absolute top-[-2px] left-[-2px] rounded bg-red-100 box-border w-60 h-[57px] border-[2px] border-solid border-white" />
          <div className="absolute top-[12px] left-[17px] font-semibold">
            Checkout NGO’s
          </div>
        </div>
        <div className="absolute top-[0px] left-[0px] w-[660px] h-[239px] text-left text-black">
          <div className="absolute top-[0px] left-[0px] font-medium flex items-center w-[660px] h-[116px]">
          We understand that reaching out for our problems can be uncomfortable. Our platform is dedicated to providing a safe and confidential space for you to share your problems and receive the support you need.

          </div>
          <div className="absolute top-[123px] left-[0px] font-medium flex items-center w-[660px] h-[116px]">{`Lorem ipsum dolor sit amet. Est voluptatem culpa ut iste voluptas aut dolore repudiandae. Non similique totam `}</div>
        </div>
      </div>
      <div className="absolute top-[calc(50%_-_488.9px)] left-[calc(50%_-_612px)] text-51xl font-semibold flex items-center w-[554px] text-red-100">
        <span className="[line-break:anywhere] w-full">
          <span>Help</span>
          <span className="text-gray-300"> Support</span>
        </span>
      </div>
      <div className="absolute top-[calc(50%_+_26.9px)] left-[calc(50%_-_612px)] text-41xl font-semibold text-gray-300">
        <span>Listed</span>
        <span className="text-red-100">{` NGO’s - `}</span>
      </div>
      <img
        className="absolute top-[29.99px] left-[603.81px] w-[617px] h-[471.69px]"
        alt=""
        src={Handshelp}
      />
    </div>
  );
};

export default HelpSupportContainer;
