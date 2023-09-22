import React from "react";
import "./Capstone.css";
import { Outlet } from "react-router-dom";

const Capstone = () => {
  return (
    <main className="main">
      <div className="capstone-main-head">
        <div className="capstone-header">
          <p className="capstone-content">
            <span className="capstone-span">Keerthana</span>
            <br />
            (B42WD Tamil- Capstone) Zen Class Ticketing system for query
            resolving
          </p>
        </div>
        <div className="validation">
          <p className="capstone-content">Yet to be graded</p>
          <button className="valid-btn">capstone</button>
        </div>
      </div>
    </main>
  );
};

export default Capstone;
