import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Education from "./Education";

function pages() {
  return (
    <Routes>
      <Route element={<Login />} path={"/"} />
      <Route element={<Home />} path={"/user"} />
      <Route element={<Education />} path={"/education"} />
    </Routes>
  );
}

export default pages;
