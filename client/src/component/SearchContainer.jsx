import React, { useState } from "react";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { Rectangle } from "@react-google-maps/api";
import Rectangle1  from "./images/rectangle1.png";
import NavigationContainer from "./NavigationContainer";
import { Button } from "@mui/material";

const SearchContainer = ({
  searchNameText,
  healthSupportText,
  rectangle39Cursor,
  rectangle38BackgroundColor,
  rectangle38Cursor,
  searchByNameTop,
  searchByNameHeight,
  sERVICEColor,
  sERVICELeft,
  searchByServiceBackgroundColor,
  searchByServiceCursor,
  buttonSearchColor,
  rectangle43Cursor,
  homeJustifyContent,
  contactUsWidth,
  logoWidth,
  onRectangleClick,
  onRectangle1Click,
  onSERVICEContainerClick,
  onButtonSearchClick,
  onHomeTextClick,
  onAboutUsTextClick,
  onHealthSupportTextClick,
  onContactUsTextClick,
  type,
  forType,
  loc
}) => {
  const rectangleDiv3Style = useMemo(() => {
    return {
      cursor: rectangle39Cursor,
    };
  }, [rectangle39Cursor]);

  const rectangleDiv4Style = useMemo(() => {
    return {
      backgroundColor: rectangle38BackgroundColor,
      cursor: rectangle38Cursor,
    };
  }, [rectangle38BackgroundColor, rectangle38Cursor]);

  const rectangleDiv5Style = useMemo(() => {
    return {
      top: searchByNameTop,
      height: searchByNameHeight,
    };
  }, [searchByNameTop, searchByNameHeight]);

  const searchByNameStyle = useMemo(() => {
    return {
      color: sERVICEColor,
      left: sERVICELeft,
    };
  }, [sERVICEColor, sERVICELeft]);

  const sERVICE1Style = useMemo(() => {
    return {
      backgroundColor: searchByServiceBackgroundColor,
      cursor: searchByServiceCursor,
    };
  }, [searchByServiceBackgroundColor, searchByServiceCursor]);

  const searchByService1Style = useMemo(() => {
    return {
      color: buttonSearchColor,
    };
  }, [buttonSearchColor]);

  const buttonSearchStyle = useMemo(() => {
    return {
      cursor: rectangle43Cursor,
    };
  }, [rectangle43Cursor]);

  const navStyle = useMemo(() => {
    return {
      justifyContent: homeJustifyContent,
    };
  }, [homeJustifyContent]);

  const healthSupportStyle = useMemo(() => {
    return {
      width: contactUsWidth,
    };
  }, [contactUsWidth]);

  const contactUsStyle = useMemo(() => {
    return {
      width: logoWidth,
    };
  }, [logoWidth]);


  const [searchParam, setSearchParam] = useSearchParams();
  const [query, setQuery] = useState('');

useEffect(()=>{
  if(searchParam.get('query')!== null){
    setQuery(searchParam.get('query'));
  }
},[])




  const handleChange = (e)=>{
    const newQuery = e.target.value;
    setQuery(newQuery);
  }

  const handleSubmit = (e)=>{

    if(forType==='ngo'){
      if(type==='name'){
        window.location.replace(`/ngo-search-spare?query=${encodeURIComponent(query)}`);
      }else{
        window.location.replace(`/ngo-search-spare1?query=${encodeURIComponent(query)}&loc=${encodeURIComponent(loc)}`);

      }
    }else{
      if(type==='loc'){
        window.location.replace(`/doctors-search-details?query=${encodeURIComponent(query)}`);
      }else{
        window.location.replace(`/doctors-search-details1?query=${encodeURIComponent(query)}&loc=${encodeURIComponent(loc)}`);
      }
    }

    e.preventDefault()
  }


  return (
    <div className="relative bg-lightpink [backdrop-filter:blur(4px)] box-border w-[1280.8px] h-[342.8px] shrink-0 text-center text-mid text-white font-montserrat border-[0.8px] border-solid border-red-100">
      
      <div className="absolute top-[149px] left-[173px] w-[933px] h-[147px] text-left">
     
      <input type='text' value={query}  onChange={(e)=>handleChange(e)}  className="absolute top-[53px] left-[0px] rounded-3041xl box-border w-[607px] h-[94px] border-[15px] border-solid border-red-100 bg-white w-[607px] h-[94px]"
        />
        <div
          className="absolute top-[0px] left-[0px] rounded-tl-11xl rounded-tr-none rounded-b-none bg-white w-[214px] h-[53px] cursor-pointer"
          onClick={onRectangle1Click}
          style={rectangleDiv4Style}
        />

        <img
          className="absolute top-[53px] left-[0px] w-[51px] h-3.5"
          alt=""
          src={Rectangle1}
        />
        <div
          className="absolute top-[53px] left-[0px] rounded-t-none rounded-br-none rounded-bl-sm bg-red-100 w-[13px] h-[50px]"
          style={rectangleDiv5Style}
        />
        <div
          className="absolute top-[20px] left-[36px] font-semibold text-red-100"
          style={searchByNameStyle}
        >
          {searchNameText}
        </div>
        <div
          className="absolute top-[0px] left-[225px] rounded-tl-none rounded-tr-11xl rounded-b-none bg-red-100 w-[214px] h-[53px] flex flex-col py-3 px-[19px] box-border items-start justify-end"
          style={sERVICE1Style}
          onClick={onSERVICEContainerClick}
        >
          <div className="relative font-semibold" style={searchByService1Style}
          onClick={onButtonSearchClick}>
            Search By Service
          </div>
        </div>
        <div
          className="absolute top-[66px] left-[719px] w-[221px] h-[69px] cursor-pointer text-6xl"
          onClick={onButtonSearchClick}
          style={buttonSearchStyle}
        >
          <img
            className="absolute top-[0px] left-[0px] rounded-3041xl w-[221px] h-[69px]"
            alt=""
            src={Rectangle1}
          />
          <button type="submit" onClick={(e)=> handleSubmit(e)} className="bg-red-100 absolute top-[25px] left-[54px] font-medium flex items-center w-[87px] h-[19px] text-5xl">
            Search
          </button>
        </div>
      </div>
      
      <div
        className="absolute top-[40px] left-[619px] flex flex-row items-start justify-center gap-[24px] text-5xl text-red-100 font-cabin"
        style={navStyle}
      >
       
        <Button
          className="relative  bg-red-100  flex items-center justify-center w-[84px] shrink-0  cursor-pointer"
          sx={{ width: 10 }}
          variant="LINED"
          color="error"
          onClick={onHomeTextClick}
        >
          Home
        </Button>
        <Button
          className="relative  bg-red-100 flex items-center justify-center w-[114px] shrink-0  cursor-pointer"
          onClick={onAboutUsTextClick}
          sx={{ width: 140 }}
          variant="LINED"
          color="error"
        >
          About Us
        </Button>
        <Button
          className="relative  bg-red-100 flex items-center justify-center w-[182px] shrink-0 cursor-pointer"
          onClick={onHealthSupportTextClick}
          style={healthSupportStyle}
          sx={{ width: 140 }}
          variant="LINED"
          color="error"
        >
          {healthSupportText}
        </Button>
        <Button
          className="relative bg-red-100  flex items-center justify-center w-[137px] shrink-0 cursor-pointer"
          onClick={onContactUsTextClick}
          style={contactUsStyle}
          sx={{ width: 140 }}
          variant="LINED"
          color="error"
        >
          Contact Us
        </Button>
      </div>
      <div className="absolute top-[27px] left-[90px] w-[167px] h-[54px] text-25xl text-gray-300">
        <div className="absolute top-[2px] left-[36px] font-semibold flex items-center justify-center w-7 h-[51px]">
          h
        </div>
        <div className="absolute top-[calc(50%_-_27px)] left-[calc(50%_-_83.5px)] font-semibold text-red-100">
          <span>Un</span>
          <span className="text-gray-300">eard</span>
  </div>
      </div>
    </div>
  );
};

export default SearchContainer;
