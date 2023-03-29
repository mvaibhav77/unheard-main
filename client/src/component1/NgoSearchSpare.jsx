import { useCallback } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import SearchContainer from "../component/SearchContainer";
import DurgContainer from "../component/DurgContainer";
import FooterContainer from "../component/FooterContainer";

const NgoSearchSpare = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onHealthSupportTextClick = useCallback(() => {
    navigate("/find-your-doctor");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onCtaClick = useCallback(() => {
    navigate("/ngo-details");
  }, [navigate]);

  const onCta1Click = useCallback(() => {
    navigate("/ngo-details");
  }, [navigate]);

  const onCta2Click = useCallback(() => {
    navigate("/ngo-details");
  }, [navigate]);

  const onCta3Click = useCallback(() => {
    navigate("/ngo-details");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col py-px px-0 box-border items-center justify-start gap-[44px]">
      <SearchContainer
        searchNameText="Search By Name"
        healthSupportText="Health Support"
        rectangle39Cursor="unset"
        rectangle38BackgroundColor="#fff"
        rectangle38Cursor="unset"
        searchByNameTop="53px"
        searchByNameHeight="50px"
        sERVICEColor="#d70908"
        sERVICELeft="36px"
        searchByServiceBackgroundColor="#d70908"
        searchByServiceCursor="unset"
        buttonSearchColor="#fff"
        rectangle43Cursor="unset"
        homeJustifyContent="center"
        contactUsWidth="182px"
        logoWidth="137px"
        onHomeTextClick={onHomeTextClick}
        onAboutUsTextClick={onAboutUsTextClick}
        onHealthSupportTextClick={onHealthSupportTextClick}
        onContactUsTextClick={onContactUsTextClick}
      />
      <DurgContainer
        onCtaClick={onCtaClick}
        onCta1Click={onCta1Click}
        onCta2Click={onCta2Click}
        onCta3Click={onCta3Click}
      />
      <FooterContainer onFrameContainer1Click={onFrameContainer1Click} />
    </div>
  );
};

export default NgoSearchSpare;
