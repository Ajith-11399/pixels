import React from "react";
import Meet from "./Components/Meet";
import { Route, Routes } from "react-router-dom";
import CreateMeet from "./Components/CreateMeet";

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<CreateMeet />} />
        <Route path="/meeting/:meetId" element={<Meet />} />
      </Routes>
    </>
  );
};

export default App;
