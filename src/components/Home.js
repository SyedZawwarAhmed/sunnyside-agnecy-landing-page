import React from "react";
import Navbar from "./Navbar";
import "../stylesheets/Home.css";
import arrow from "../assets/images/icon-arrow-down.svg";

function Home() {
  return (
    <>
      <div className="home">
        <Navbar />
        <div className="title-div">
          <h1 className="title">We are Creatives</h1>
          <img className="arrow-down" src={arrow} alt="" />
        </div>
      </div>
    </>
  );
}

export default Home;
