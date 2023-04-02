import React from "react";
import { useCallback, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ContainerHeader from "../component/ContainerHeader";
import TextareaContainer from "../component/TextareaContainer"
import { DoctorContext } from "../context/DoctorsContext";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import SearchResultDisplay from "../component/SearchResultDisplay";
import { LocationContext } from "../context/LocationContext";


const DoctorSearchDetails1 = () => {
  const navigate = useNavigate();

  const onCtaClick = useCallback(() => {
    navigate("/doctors-info");
  }, [navigate]);

  const onCta1Click = useCallback(() => {
    navigate("/doctors-info");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/find-your-doctor");
  }, [navigate]);

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
    const anchor = document.querySelector(
      "[data-scroll-to='contactUsContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const {getLocationResults,
    getServiceResults,
    setServiceSearched,
    setLocationSearched,
    serviceSearched,
    locationSearched,} = useContext(DoctorContext);

  const {city} = useContext(LocationContext)
  
    
    const [searchParam, setSearchParam] = useSearchParams();
  const [query, setQuery] = useState(searchParam.get('query'));
  console.log(query);

  useEffect(()=>{
    getLocationResults(query);
    console.log(locationSearched);
  },[])

  return (
    <div className="relative bg-white w-full h-[1681px] overflow-hidden text-left text-7xl text-black font-montserrat">
      <ContainerHeader
        helpSupportCursor="pointer"
        contactUsBackgroundColor="#d70908"
        propTop="49px"
        propHeight="54px"
        propColor="#fff"
        propBackgroundColor="#fff"
        propColor1="#d70908"
        onRectangleClick={onRectangleClick}
        onHomeTextClick={onHomeTextClick}
        onAboutUsTextClick={onAboutUsTextClick}
        onHelpSupportTextClick={onHelpSupportTextClick}
        onContactUsTextClick={onContactUsTextClick} 
        type='loc'
        loc={city}
      />
      <div className="absolute top-[475px] left-[99px] w-[884px] h-[608px] flex flex-col items-center justify-start gap-[44px] text-left text-5xl text-black font-montserrat">
      {locationSearched.length ? locationSearched.map(doc=>{
              return (
                <SearchResultDisplay name={doc.Name} practicing={doc.Practicing} degree={doc.Degree} address={doc.Address_1} id={doc.id}/>
              )
            }): (
                <div>
                  No result found
                </div>
              )
            }
        </div>

      <TextareaContainer
        propPosition="absolute"
        propFlexShrink="unset"
        propTop="1153px"
        propLeft="0px"
        propLeft1="716px"
        propTop1="41px"
        onFrameContainerClick={onFrameContainerClick}
      />
    </div>
  );
};

export default DoctorSearchDetails1;
