import React from "react";
import { IoMdCall } from "react-icons/io";
function Footer() {
  return (
    <>
      <div className="mt-4 text-center">
        <h1 className="font-bold">
          C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
        </h1>
        <p className="mt-4">
          CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS
          & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD &
          BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING
          AGRICULTURE & RESIDENTIAL
        </p>
      </div>
      <div className="bg-red-500 text-white flex justify-evenly h-28 mt-5 p-4 list-none items-center">
        <div className="flex items-center">
          <p>Toll free 1800 200 1234</p>
        </div>
        <li>www.facebook.com/cripuma</li>
        <li>www.crigmupa.com</li>
      </div>
    </>
  );
}

export default Footer;
