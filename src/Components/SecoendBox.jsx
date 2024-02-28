import React from "react";
import Items from "../assets/3.png";
function SecoendBox() {
  return (
    <div className="mt-12">
      <p className="text-center">
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        THAN IN A CUMULATIVE UNIT SAVING OF MORE THAN 9,000 MILLION UNITS OF
        POWER FOR THE NATION.
      </p>
      <div className="flex items-center flex-col">
        <img className="w-[74rem]" src={Items} alt="" />
        <p className="mt-1">
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors{" "}
        </p>
      </div>
      <div className="bg-red-500 w-[95%] h-[0.9px] mx-auto mt-4"></div>
    </div>
  );
}

export default SecoendBox;
