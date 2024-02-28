import React from "react";
import Trophy from "../assets/1.png";
import mens from "../assets/2.png";

function MainContainer() {
  return (
    <>
      <div className="flex justify-center">
        <div className=" flex  ">
          <div>
            <img className="w-[55rem] " src={Trophy} alt="" />
          </div>
          <div className="">
            <h1 className="font-bold mt-3">
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.
            </h1>
            <p className="ml-6 mt-4">
              • C.R.I.'s energy efficient products are well recognized by
              various Government Institutions, as trustworthy products for
              various projects across the globe to save energy.
            </p>
            <p className="ml-6">
              • C.R.I. is the highest contributor in the country for the
              projects of EESL (Energy Efficiency Services Limited) to replace
              the old inefficient pumps with 5 Star rated energy efficient smart
              pumps with IoT enabled control panel.
            </p>
            <img className="w-[60rem] mt-4" src={mens} alt="" />
            <p className="ml-7">
              Government of India has awarded the{" "}
              <span className="font-bold">
                "National Energy Conservation Award 2018"
              </span>{" "}
              . Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group
              received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha
              & Shri. Raj Kumar Singh, Honorable Minister of State.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainContainer;
