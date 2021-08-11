import React from "react";
import Navbar from "./Navbar";
import "../stylesheets/Home.css";

function Home() {
  return (
    <>
      <div className="home">
        <Navbar />
        <h1 className="title">We are Creatives</h1>
        <img src="../assets/images/icon-arrow-down.svg" alt="" />
      </div>
    </>
  );
}

export default Home;
