//import React from 'react';
import "./Home.css"
import pic from"../../public/mypic.jpg";
import { FaXTwitter } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { IoMailOpenOutline } from "react-icons/io5";
function Home() {
  return (
    <>
    <div>
        <div className="flex-container">
          <img src={pic} alt="mypic" />
        </div>
        <div>
          <h1>Aman Code Resource</h1>
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
                <img className="button-img" src="" alt="" />
              </div>
              <span>Campus to Aptitude</span>
            </button>
        </div>
     </div>
    </>
  )
}

export default Home;
