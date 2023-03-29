import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FooterTextareaContainer2 from "../component/FooterTextareaContainer2";

const DoctorsInfo = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onHelpSupportTextClick = useCallback(() => {
    navigate("/ngo-search");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onBookContainerClick = useCallback(() => {
    navigate("/video-call");
  }, [navigate]);

  const onBackArrowIconClick = useCallback(() => {
    navigate("/doctors-search-details");
  }, [navigate]);

  return (
    <div className="relative bg-lavenderblush-200 w-full h-[2733px] overflow-hidden text-left text-5xl text-red-100 font-montserrat">
      <div className="absolute top-[0px] left-[0px] w-[1280px] h-[87px] text-center text-25xl">
        <div className="absolute top-[0px] left-[0px] bg-mistyrose-400 w-[1280px] h-[87px]" />
        <div className="absolute top-[18px] left-[104px] font-semibold text-gray-300 flex items-center justify-center w-7 h-[51px]">
          h
        </div>
        <div className="absolute top-[calc(50%_-_27.5px)] left-[calc(50%_-_572px)] font-semibold">
          <span>Un</span>
          <span className="text-gray-300">eard</span>
        </div>
        <div className="absolute top-[29px] left-[640px] flex flex-row items-start justify-start gap-[24px] text-5xl font-cabin">
          <div
            className="relative font-semibold flex items-center justify-center w-[84px] shrink-0 [backdrop-filter:blur(4px)] cursor-pointer"
            onClick={onHomeTextClick}
          >
            Home
          </div>
          <div
            className="relative font-semibold flex items-center justify-center w-[114px] shrink-0 [backdrop-filter:blur(4px)] cursor-pointer"
            onClick={onAboutUsTextClick}
          >
            About Us
          </div>
          <div
            className="relative font-semibold flex items-center justify-center w-[171px] shrink-0 [backdrop-filter:blur(4px)] cursor-pointer"
            onClick={onHelpSupportTextClick}
          >
            Help Support
          </div>
          <div
            className="relative font-semibold flex items-center justify-center w-[114px] shrink-0 [backdrop-filter:blur(4px)] cursor-pointer"
            onClick={onContactUsTextClick}
          >
            Contact Us
          </div>
        </div>
      </div>
      <div className="absolute top-[717px] left-[95px] w-[1089px] h-[280px] text-black">
        <div className="absolute top-[0px] left-[0px] rounded-16xl bg-pink-200 w-[1089px] h-[280px]" />
        <div className="absolute top-[119px] left-[83px] tracking-[-0.01em] font-medium flex items-center w-[890px]">
          <span className="[line-break:anywhere] w-full">
            <p className="[margin-block-start:0] [margin-block-end:5px]">
              <span className="text-black">{`In practice since `}</span>
              <span className="text-red-100">2006</span>
              <span>, as a Consultant.</span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:5px]">
              Address : Indo Vietnam Medical Board, B-121, Second Floor, Green
              Fields Colony, Greenfields, Sector 42, Faridabad, Haryana-121003
            </p>
            <p className="m-0">Phone number : 0129-2510534</p>
          </span>
        </div>
        <div className="absolute top-[36px] left-[83px] text-31xl font-medium text-gray-300 flex items-center w-[257px] h-[75px]">
          Overview
        </div>
        <img
          className="absolute top-[23px] left-[1018px] w-[38px] h-[38px]"
          alt=""
          src="/ellipse-32.svg"
        />
      </div>
      <div className="absolute top-[1041px] left-[95px] w-[1089px] h-[280px] text-black">
        <div className="absolute top-[0px] left-[0px] rounded-16xl bg-pink-200 w-[1089px] h-[280px]" />
        <div className="absolute top-[119px] left-[83px] tracking-[-0.01em] font-medium flex items-center w-[906px]">
          <span className="[line-break:anywhere] w-full">
            <p className="[margin-block-start:0] [margin-block-end:5px]">
              Area of practice: Dietician
            </p>
            <p className="[margin-block-start:0] [margin-block-end:5px]">
              Degree : Post Graduation in Diabetes Education from International
              Diabetes Federation, Belgium, PhD
            </p>
            <p className="m-0">Faridabad, Haryana, India</p>
          </span>
        </div>
        <div className="absolute top-[36px] left-[83px] text-31xl font-medium flex items-center w-[257px] h-[75px]">
          Expertise
        </div>
        <img
          className="absolute top-[23px] left-[1018px] w-[38px] h-[38px]"
          alt=""
          src="/ellipse-33.svg"
        />
      </div>
      <div className="absolute top-[472px] left-[386px] w-[509px] h-[122px] flex flex-col items-center justify-start gap-[12px] text-31xl">
        <div className="relative font-semibold">{`Dr. Ashok Kumar `}</div>
        <div className="relative text-21xl">{`Gynaecologist MBBS, MD `}</div>
      </div>
      <img
        className="absolute top-[1365px] left-[126px] w-[1027px] h-[770px] object-cover"
        alt=""
        src="/image-4@2x.png"
      />
      <FooterTextareaContainer2 />
      <div
        className="absolute top-[626px] left-[491px] w-[298px] h-[58px] cursor-pointer text-center text-9xl text-white"
        onClick={onBookContainerClick}
      >
        <div className="absolute top-[0px] left-[0px] rounded-sm bg-red-100 w-[298px] h-[58px]" />
        <div className="absolute top-[12px] left-[68px] font-semibold">
          Book a Call
        </div>
      </div>
      <img
        className="absolute top-[138.6px] left-[94.74px] w-[35.68px] h-[32.4px] cursor-pointer"
        alt=""
        src="/back-arrow3.svg"
        onClick={onBackArrowIconClick}
      />
      <img
        className="absolute top-[119px] left-[488px] w-[302px] h-[305px] object-cover"
        alt=""
        src="/doc-img@2x.png"
      />
      <img
        className="absolute top-[119px] left-[489px] w-[302px] h-[305px]"
        alt=""
        src="/doc-img1.svg"
      />
    </div>
  );
};

export default DoctorsInfo;
