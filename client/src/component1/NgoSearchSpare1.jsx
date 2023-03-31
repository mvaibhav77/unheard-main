import { useCallback } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import SearchContainer from "../component/SearchContainer";
import DurgContainer from "../component/DurgContainer";
import FooterContainer from "../component/FooterContainer";
import { NGOContext } from "../context/NGOContext";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useContext, useEffect } from "react";


const NgoSearchSpare1 = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/ngo-search1");
  }, [navigate]);

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

  const onFrameContainer1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const {
    setNameSearched,
    nameSearched,getNameResults} = useContext(NGOContext);
  const [searchParam, setSearchParam] = useSearchParams();
  const [query, setQuery] = useState(searchParam.get('query'));
  console.log(query);

  useEffect(()=>{
    getNameResults(query);
  },[]) 

  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col py-px px-0 box-border items-center justify-start gap-[44px]">
      <SearchContainer
        searchNameText="Search By Name"
        healthSupportText="Health Support"
        rectangle39Cursor="pointer"
        rectangle38BackgroundColor="#d70908"
        rectangle38Cursor="unset"
        searchByNameTop="49px"
        searchByNameHeight="54px"
        sERVICEColor="#fff"
        sERVICELeft="36px"
        searchByServiceBackgroundColor="#fff"
        searchByServiceCursor="unset"
        buttonSearchColor="#d70908"
        rectangle43Cursor="unset"
        homeJustifyContent="center"
        contactUsWidth="182px"
        logoWidth="137px"
        onRectangleClick={onRectangleClick}
        onHomeTextClick={onHomeTextClick}
        onAboutUsTextClick={onAboutUsTextClick}
        onHealthSupportTextClick={onHealthSupportTextClick}
        onContactUsTextClick={onContactUsTextClick}
        forType='ngo'
        type='name'
      />
{nameSearched.length ? nameSearched.map(ngo => {
        // console.log(ngo);
        return (
        <DurgContainer
          id={ngo.id}
          name={ngo.ngo_name}
          sectors = {ngo.sector}
          key={ngo.id}
        />
        )
      }): (
        <div>
          No result found
        </div>
      )}
      <FooterContainer onFrameContainer1Click={onFrameContainer1Click} />
    </div>
  );
};

export default NgoSearchSpare1;
