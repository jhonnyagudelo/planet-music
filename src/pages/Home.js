import React, { useState } from "react";
import SecondHomeSection from "../components/SecondHomeSection";
import GameContainer from "../components/GameContainer";
import HomePrincipal from "./HomePrincipal";

const Home = () => {
  return (
    <>
      <div className="bg-black text-white min-h-screen flex flex-col items-center p-0">
        <HomePrincipal />
      </div>
    </>
  );
};

export default Home;
