import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Handshealth from './images/handshealth.png';

const HealthSupportContainer = () => {
  const navigate = useNavigate();

  const onRectangle5Click = useCallback(() => {
    navigate("/doctors-info");
  }, [navigate]);

  const onRectangle6Click = useCallback(() => {
    navigate("/doctors-info");
  }, [navigate]);

  const onRectangle7Click = useCallback(() => {
    navigate("/doctors-info");
  }, [navigate]);

  const onLearnMoreContainerClick = useCallback(() => {
    navigate("/find-your-doctor1");
  }, [navigate]);

  return (
    <div
      className="absolute top-[2648.59px] left-[61px] w-[1191px] h-[1077px] text-left text-41xl text-gray-300 font-montserrat"
      data-scroll-to="land4Container"
    >
      <div className="absolute top-[615px] left-[0px] w-[1043px] h-[462px] flex flex-col pt-[3px] px-0 pb-0 box-border items-start justify-start gap-[37px]">
        <div className="relative font-semibold">
          <span>Meet our</span>
          <span className="text-red-100">{` Doctors - `}</span>
        </div>
        <div className="w-[1043px] h-[349px] shrink-0 flex flex-row items-center justify-start gap-[52px]">
          <div
            className="relative rounded-lg bg-lightpink [backdrop-filter:blur(4px)] box-border w-[313.8px] h-[349.8px] shrink-0 cursor-pointer border-[0.8px] border-solid border-red-100"
            onClick={onRectangle5Click}
          />
          <div
            className="relative rounded-lg bg-lightpink [backdrop-filter:blur(4px)] box-border w-[313.8px] h-[349.8px] shrink-0 cursor-pointer border-[0.8px] border-solid border-red-100"
            onClick={onRectangle6Click}
          />
          <div
            className="relative rounded-lg bg-lightpink [backdrop-filter:blur(4px)] box-border w-[313.8px] h-[349.8px] shrink-0 cursor-pointer border-[0.8px] border-solid border-red-100"
            onClick={onRectangle7Click}
          />
        </div>
      </div>
      <div className="absolute top-[144px] left-[0px] w-[1191px] h-[424.97px] flex flex-row items-center justify-end gap-[48px] text-5xl text-black">
        <img
          className="relative w-[571.48px] h-[432.57px] shrink-0"
          alt=""
          src={Handshealth}
        />
        <div className="w-[578px] h-[499px] shrink-0 flex flex-col items-start justify-start gap-[48px]">
          <div className="w-[578px] h-[198px] shrink-0 flex flex-col items-start justify-start gap-[24px]">
            <div className="relative font-medium flex items-center w-[541.58px]">{`Get the healthcare support & consultation you need, without the hassle. Our platform provides a safe and confidential space for you to describe your health concerns and connect with doctors free of charge `}</div>
          </div>            <div className="relative font-medium flex items-center w-[578px]">{`Don't let fear or uncertainty hold you back from prioritising your well-being. Join us today and take the first step towards a healthier, happier you.`}</div>

          <div
            className="relative w-64 h-[53px] shrink-0 cursor-pointer text-center text-white"
            onClick={onLearnMoreContainerClick}
          >
            <div className="absolute top-[-2px] left-[-2px] rounded bg-red-100 box-border w-[260px] h-[57px] border-[2px] border-solid border-white" />
            <div className="absolute top-[12px] left-[9px] font-semibold">
              Search your Doctor
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[calc(50%_-_529.5px)] left-[calc(50%_-_595.5px)] text-51xl font-semibold text-center text-red-100">
        <span>Health</span>
        <span className="text-gray-300"> Support</span>
      </div>
    </div>
  );
};

export default HealthSupportContainer;
