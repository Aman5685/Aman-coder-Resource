//import React from 'react';
import "./Home.css"
import pic from"../../public/mypic.jpg";
import Java from"../../public/Java Full Stack.png";
import aptitude from"../../public/first logo img.png"
import { FaXTwitter } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { IoMailOpenOutline } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";

function Home() {
  return (
    <>
    <div>
        <div className="main-container">
          <img src={pic} alt="mypic" />
        </div>
        <div>
          <h1>O(1) Aman Coder</h1>
          <p><a href="mailto:amanyadav5685@gmail.com"><span>Click  Mail_me</span> </a>if any link is broken.</p>
        </div>
        <div className="icon-container">
        <i className="icon"><FaXTwitter /></i>
          <i className="icon"><CiYoutube /></i>
          <i className="icon"><IoMailOpenOutline /></i>
          <i className="icon"><CiInstagram /></i>
        </div>
        <div className="button-container">
            <button>
              <div>
                <img className="button-img" src={aptitude} alt="" />
              </div>
              <a href="https://whimsical.com/1-aptitude-SZhta1dC1nX78HsRQU6L26" target="blank">
              <span className="Aptitude">Campus to Aptitude</span></a>
              <div className="menus-icons">
              <CiMenuKebab />
              </div>
            </button>
        </div>
        <div className="button-container">
            <button>
              <div>
                <img className="button-img" src={Java} alt="" />
              </div>
              <a href="https://whimsical.com/smartyaman2126-Gf6DL1n4GheAQhttpRx2Wg" target="blank">
              <span className="Aptitude">Java Full Stack</span></a>
              <div className="menus-icons">
              <CiMenuKebab />
              </div>
            </button>
        </div>
     </div>
    </>
  )
}

export default Home;
