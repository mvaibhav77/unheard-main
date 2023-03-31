import { useCallback, useContext, useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import SearchContainer from "../component/SearchContainer";
import DurgContainer from "../component/DurgContainer";
import FooterContainer from "../component/FooterContainer";
import { NGOContext } from "../context/NGOContext";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

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

  const onFrameContainer1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  
  const {getSectorResults,
    result,
    setSectorSearched,
    setNameSearched,
    sectorSearched,
    nameSearched, searchedNgo, getNGODetail} = useContext(NGOContext);
  const [searchParam, setSearchParam] = useSearchParams();
  const [query, setQuery] = useState(searchParam.get('query'));
  console.log(query);

  useEffect(()=>{
    getSectorResults(query);
  },[]) 



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
        forType='ngo'
        type='sector'
      />
      {sectorSearched.length ? sectorSearched.map(ngo => {
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

export default NgoSearchSpare;
