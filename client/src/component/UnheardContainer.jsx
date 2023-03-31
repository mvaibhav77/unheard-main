import React from "react";
import Ellipse from './images/ellipse.png';
const UnheardContainer = () => {
    return (
      <div className="absolute top-[150px] left-[121px] w-[1037px] h-[1098px] text-center text-33xl text-gray-300 font-montserrat">
        <div className="absolute top-[0px] left-[0px] rounded-16xl bg-gray-400 [backdrop-filter:blur(4px)] w-[1037]px] h-[1200px]">
          <div className="absolute top-[7px] left-[34px] rounded-16xl bg-mistyrose-300 [backdrop-filter:blur(4px)] box-border w-[970px] h-[1100px] border-t-[1px] border-solid border-red-200 border-r-[1px] border-l-[1px]" />
        </div>
        <div className="absolute top-[45px] left-[102px] flex flex-col items-start justify-start gap-[28px]">
          <div className="relative w-[439px] h-[63px] shrink-0">
            <div className="absolute top-[0px] left-[0px] font-semibold">
              <span>About</span>
              <span className="text-red-100"> Unheard</span>
            </div>
          </div>
          <div className="relative text-5xl font-medium text-black text-left inline-block w-[842px] h-[893px] shrink-0">
            <p className="m-0">
            Welcome to our platform, where we believe that every woman deserves access to quality healthcare and NGO support. Our initiative began with a simple idea - to create a space where women in need could receive the help and care they deserve.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">{` Through research and interaction with women who were struggling to access healthcare and NGO support, we became overwhelmed by the stories we heard. We knew that something needed to be done to address this critical issue. We were inspired to create a web application that would connect women with NGOs and doctors who specialize in their specific needs.
 `}</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
            Our platform provides a safe and confidential space for women to describe their problems and connect with relevant NGOs and doctors, free of charge. We believe that this holistic approach to healthcare and NGO support can make a real difference in the lives of women in need.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">{`At the core of our initiative is the belief that every woman has the right to live a healthy, happy life. We understand that seeking help can be daunting, but we want you to know that you're not alone. Our platform is designed to provide a safe and welcoming space for you to receive the support and care you need.
 `}</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">{`We are dedicated to empowering women and creating positive change in our communities. We are honored to be a part of this incredible journey, and we are excited to see the impact we can make together.
 `}</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
            Join us today and become a part of this movement to provide healthcare and NGO support to women in need. Together, we can make a real difference and create a better future for women everywhere.

            </p>
          </div>
        </div>
        <img
          className="absolute top-[26px] left-[948px] w-[38px] h-[38px]"
          alt=""
          src={Ellipse}
        />
      </div>
    );
  };
  
  export default UnheardContainer;
  