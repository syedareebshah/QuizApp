import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from "../comp/card";
import Login from "../comp/Login";



const RouteComp = () => {
  return (
    <div className="AppRouter">
      <Router>
        <Routes>
          <Route element={<Login />} path="/" />
          <Route element={<Card />} path="/quiz/:name/:num" />
        </Routes>
      </Router>
    </div>
  );
};

export default RouteComp;