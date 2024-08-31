import React from "react";
import SuccessfulCases from "./Components/SuccessfulCases";
import StatsSection from "./Components/StatsSection";
import Currencies from "./Components/Currencies";
import Last from "./Components/Last";

function App() {
  return (
    <div className=" bg-gradient-to-r from-[#2a1249] via-[#2a1249] to-[#2a1249]/85 text-white py-16 min-h-[100vh] ">
      <SuccessfulCases />

      <StatsSection />
      <Currencies />
      <Last />
    </div>
  );
}

export default App;
