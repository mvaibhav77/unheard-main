import React from "react";
const UnheardContainer = () => {
    return (
      <div className="absolute top-[150px] left-[121px] w-[1037px] h-[1098px] text-center text-33xl text-gray-300 font-montserrat">
        <div className="absolute top-[0px] left-[0px] rounded-16xl bg-gray-400 [backdrop-filter:blur(4px)] w-[1037px] h-[1098px]">
          <div className="absolute top-[7px] left-[34px] rounded-16xl bg-mistyrose-300 [backdrop-filter:blur(4px)] box-border w-[970px] h-[1091px] border-t-[1px] border-solid border-red-200 border-r-[1px] border-l-[1px]" />
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
              "At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">{` Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. `}</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Itaque earum rerum hic tenetur a sapiente delectus, ut aut
              reiciendis voluptatibus maiores alias consequatur aut perferendis
              doloribus asperiores repellat."
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">{`Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. `}</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">{`omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. `}</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Itaque earum rerum hic tenetur a sapiente delectus, ut aut
              reiciendis voluptatibus maiores alias consequatur aut perferendis
              doloribus asperiores repellat."
            </p>
          </div>
        </div>
        <img
          className="absolute top-[26px] left-[948px] w-[38px] h-[38px]"
          alt=""
          src="/ellipse-3.svg"
        />
      </div>
    );
  };
  
  export default UnheardContainer;
  