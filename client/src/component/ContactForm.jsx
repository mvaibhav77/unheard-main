import React from "react";
import { TextField } from "@mui/material";

const ContactForm = () => {
  return (
    <div className="absolute top-[0.41px] left-[0px] w-[505px] h-[331px] text-center text-41xl text-gray-300 font-montserrat">
      <div className="absolute top-[calc(50%_-_162.5px)] left-[calc(50%_-_252.5px)] font-semibold">
        <span>Contact</span>
        <span className="text-red-100"> Us</span>
      </div>
      <div className="absolute top-[100px] left-[0px] rounded-xl bg-lavenderblush-200 w-[505px] h-[127px] flex flex-col py-[25px] px-[15px] box-border items-start justify-start">
        <TextField
          className="relative"
          sx={{ width: 425 }}
          color="error"
          variant="outlined"
          multiline
          label="pen down your queries.."
          placeholder="Textarea placeholder"
          margin="none"
        />
      </div>
      <div className="absolute top-[255px] left-[0px] w-[505px] h-[76px] flex flex-col items-start justify-start gap-[7px] text-left text-5xl text-black">
        <div className="relative font-semibold flex items-center w-[200px] h-[25px] shrink-0">{`Email - `}</div>
        <div className="rounded-2xl bg-lavenderblush-200 w-[505px] h-11 shrink-0 flex flex-col py-0 px-[15px] box-border items-start justify-center">
          <TextField
            className="relative"
            sx={{ width: 425 }}
            color="error"
            variant="outlined"
            multiline
            label="abc@gmail.com"
            placeholder="Textarea placeholder"
            margin="none"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
