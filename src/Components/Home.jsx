//import React from 'react';
import "./Home.css"
import pcs from "../../public/my-pic.avif";
import Java from"../../public/Java Full Stack.png";
import aptitude from"../../public/first logo img.png";
import DSAtodevelopment from "../../public/DSA to Development.png";
import resumebuilding from "../../public/Resume Building.png";
import chatgpt from "../../public/Chatgtp_promt.png";
import jobportal from "../../public/Job Portal.png";
import tcscode from "../../public/TCS code vita.png";
import toughinterview from "../../public/64 tough.png";
import companywise from "../../public/Company wise CGPA.png";
import tcscodeprep from "../../public/TCSCODEVITA-Preapation.png";
import fresher from "../../public/Fresherjobs.png";
import HRInterview from "../../public/HR-interview Question list.png";
import { FaXTwitter } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { IoMailOpenOutline } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";

function Home() {
  return (
    <>
    <div className="Container">
        <div className="main-container">
          <img  src={pcs} alt="mypic" />
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
        {/*First tree*/}
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
        {/*Second Tree*/}
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
        {/*Third Tree*/}
        </div>
        <div className="button-container">
        <button>
              <div>
                <img className="button-img" src={DSAtodevelopment} alt="" />
              </div>
              <a href="https://whimsical.com/dsa-to-development-G1uamohhiFBeHNLV6RLzk9" target="blank">
              <span className="Aptitude">DSA to Development</span></a>
              <div className="menus-icons">
              <CiMenuKebab />
              </div>
            </button>
        </div>
        {/*Fourth Tree*/}
        <div className="button-container">
        <button>
              <div>
                <img className="button-img" src={resumebuilding} alt="" />
              </div>
              <a href="https://resume-guide-rhl9hco.gamma.site/" target="blank">
              <span className="Aptitude">Resume Building</span></a>
              <div className="menus-icons">
              <CiMenuKebab />
              </div>
            </button>
        </div>
        {/*Five Tree*/}
        <div className="button-container">
        <button>
              <div>
                <img className="button-img" src={chatgpt} alt="" />
              </div>
              <a href="https://docs.google.com/document/d/1JGvzPKHtlMDj_8Cw8gXNEEOJxpiRsKTQLfybh8psBDI/edit?usp=sharing" target="blank">
              <span className="Aptitude">CHAT GPT PROMPT</span></a>
              <div className="menus-icons">
              <CiMenuKebab />
              </div>
            </button>
        </div>
        {/*Six Tree*/}
        <div className="button-container">
        <button>
              <div>
                <img className="button-img" src={jobportal} alt="" />
              </div>
              <a href="https://docs.google.com/spreadsheets/d/1cQEMITyujttj0XVQKHt7YJJwHL2y5_QY1Yb2SCrdvk0/htmlview#gid=0" target="blank">
              <span className="Aptitude">JOB PORTAL</span></a>
              <div className="menus-icons">
              <CiMenuKebab />
              </div>
            </button>
        </div>
        {/*Seven Tree*/}
        <div className="button-container">
        <button>
              <div>
                <img className="button-img" src={tcscode} alt="" />
              </div>
              <a href="https://docs.google.com/document/d/1UP81SqV4UtE-PGXN1QBhc_KyORJaprNnj1Jeo-NJ9i0/edit?usp=sharing" target="blank">
              <span className="Aptitude">TCS Code Vita Chatgpt Prompt</span></a>
              <div className="menus-icons">
              <CiMenuKebab />
              </div>
            </button>
        </div>
        {/*Eight Tree*/}
        <div className="button-container">
        <button>
              <div>
                <img className="button-img" src={toughinterview} alt="" />
              </div>
              <a href="https://drive.google.com/file/d/1Nwy4CkV7bMpb04rWMgYN_H-eNDcHYV9v/view" target="blank">
              <span className="Aptitude">64 Toughest Interview Questions.pdf</span></a>
              <div className="menus-icons">
              <CiMenuKebab />
              </div>
            </button>
        </div>
        {/*Nine Tree*/}
        <div className="button-container">
        <button>
              <div>
                <img className="button-img" src={companywise} alt="" />
              </div>
              <a href="https://docs.google.com/spreadsheets/d/1qi1ZuZFD0oQVWT4CnxbX9pfqgddhKYWZl9tBtHjKJKo/edit?gid=0#gid=0" target="blank">
              <span className="Aptitude">Company Wise CGPA</span></a>
              <div className="menus-icons">
              <CiMenuKebab />
              </div>
            </button>
        </div>
        {/*Tenth Tree*/}
        <div className="button-container">
        <button>
              <div>
                <img className="button-img" src={tcscodeprep} alt="" />
              </div>
              <a href="https://docs.google.com/document/d/1R6Vylx6FmVXEdnwsf1dtJ-6Q1faEOh53TzfZETUJocw/edit?usp=sharing" target="blank">
              <span className="Aptitude">TCS Code Vita Preparation</span></a>
              <div className="menus-icons">
              <CiMenuKebab />
              </div>
            </button>
        </div>  
        {/*Jobs Links*/}
        <div className="button-container">
        <button>
              <div>
                <img className="button-img" src={fresher} alt="" />
              </div>
              <a href="https://docs.google.com/document/d/1QkXzs513X766yvY-8NIpgpDwZXYDUL5NdrYOjMFPBCo/edit?tab=t.0" target="blank">
              <span className="Aptitude">Fresher Jobs</span></a>
              <div className="menus-icons">
              <CiMenuKebab />
              </div>
            </button>
        </div>
        {/* Hr Interview */}
        <div className="button-container">
        <button>
              <div>
                <img className="button-img" src={HRInterview} alt="" />
              </div>
              <a href="https://drive.google.com/file/d/1CJM9s5DCrrWnf0WmOwMH9RuuevMaT3x0/view?usp=sharing" target="blank">
              <span className="Aptitude">HR Interview Questions</span></a>
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
