import React from "react";
import logo from "./assets/logo.png";
import MainContainer from "./Components/MainContainer";
import SecoendBox from "./Components/SecoendBox";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="w-full h-screen">
      <div className="flex justify-center items-center ">
        <img className="w-[32rem]" src={logo} alt="" />
      </div>
      <MainContainer></MainContainer>
      <SecoendBox></SecoendBox>
      <Footer></Footer>
    </div>
  );
}

export default App;
