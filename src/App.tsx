import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default () => {
  return <App />;
};
