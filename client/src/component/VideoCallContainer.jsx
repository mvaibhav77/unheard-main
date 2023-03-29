import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const VideoCallContainer = () => {
  const navigate = useNavigate();

  const onOtherPersonClick = useCallback(() => {
    navigate("/video-call1");
  }, [navigate]);

  const onIcons8Call1001Click = useCallback(() => {
    navigate("/doctors-info");
  }, [navigate]);

  const onLineIconClick = useCallback(() => {
    navigate("/video-call");
  }, [navigate]);

  const onVideoContainerClick = useCallback(() => {
    navigate("/video-call2");
  }, [navigate]);

  return (
    <div className="absolute top-[81px] left-[136px] w-[600px] h-[600px]">
      <div className="absolute top-[0px] left-[0px] rounded-xl bg-gainsboro-200 w-[600px] h-[600px]" />
      <div
        className="absolute top-[12px] left-[425px] rounded-mini bg-lavenderblush-100 w-[162px] h-[182px] cursor-pointer"
        onClick={onOtherPersonClick}
      />
      <div className="absolute top-[526px] left-[194px] w-[211px] h-[57px]">
        <div className="absolute top-[0px] left-[77px] shadow-[0px_0.5px_1px_#fff4f6] [backdrop-filter:blur(4px)] w-[57px] h-[57px]">
          <div className="absolute top-[0px] left-[0px] rounded-sm bg-red-100 w-[57px] h-[57px]" />
          <img
            className="absolute top-[10px] left-[9px] w-10 h-9 object-cover cursor-pointer"
            alt=""
            src="/icons8call100-1@2x.png"
            onClick={onIcons8Call1001Click}
          />
        </div>
        <div className="absolute top-[0px] left-[0px] w-[57px] h-[57px]">
          <div className="absolute top-[0px] left-[0px] rounded-sm bg-mistyrose-200 shadow-[0px_0.5px_1px_#e14343] [backdrop-filter:blur(4px)] w-[57px] h-[57px]" />
          <img
            className="absolute top-[8px] left-[9px] w-10 h-10 object-cover"
            alt=""
            src="/icons8audiorecordinglogotypeofamicrophonelayout96-1@2x.png"
          />
          <div className="absolute top-[0px] left-[0px] rounded-mini bg-gray-500 w-[57px] h-[57px]" />
          <img
            className="absolute top-[9.98px] left-[9.41px] w-[40.57px] h-[39.6px] cursor-pointer"
            alt=""
            src="/line-12.svg"
            onClick={onLineIconClick}
          />
        </div>
        <div
          className="absolute top-[0px] left-[154px] w-[57px] h-[57px] cursor-pointer"
          onClick={onVideoContainerClick}
        >
          <div className="absolute top-[0px] left-[0px] rounded-sm bg-mistyrose-200 shadow-[0px_0.5px_1px_#e14343] [backdrop-filter:blur(4px)] w-[57px] h-[57px]" />
          <img
            className="absolute top-[11px] left-[11px] w-[35px] h-[35px] object-cover"
            alt=""
            src="/icons8videocall100-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoCallContainer;
