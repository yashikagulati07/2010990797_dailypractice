import React from "react";
import "./About.css";
import { AiFillSignal,AiOutlinePoweroff,AiFillHeart,AiOutlineFileDone,AiTwotoneHighlight,AiFillSafetyCertificate,AiFillTool } from "react-icons/ai";
//import {BsGlobe2} from "react-icons/bs";
// import { FaGlobeAmericas } from "react-icons/ai";
const About = () => {
  return (
    <>
 <div className="container-fluid text-center">
  <h1 className="heading2">About</h1>
  <h4>What we offer</h4>
  <br/>
  <div className="row">
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-off logo-small" style={{color: "#f4511e",fontSize: "50px"}}><AiOutlinePoweroff/></span>
      <h4>POWER</h4>
      <p>24/7 electricity supply </p>
    </div>
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-heart logo-small" style={{color: "#f4511e",fontSize: "50px"}}><AiFillHeart/></span>
      <h4>LOVE</h4>
      <p>Service available anytime  </p>
    </div>
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-lock logo-small" style={{color: "#f4511e",fontSize: "50px"}}><AiOutlineFileDone/></span>
      <h4>Breakfast</h4>
      <p>Get complimentory breakfast till you stay</p>
    </div>
  </div>
   <br></br>
    <div className="row">
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-leaf logo-small"><AiTwotoneHighlight/></span>
      <h4>Membership</h4>
      <p>have access to our Piority Line</p>
    </div>
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-certificate logo-small"><AiFillSafetyCertificate/></span>
      <h4>Discounts </h4>
      <p>10% discount on all food during your stay</p>
    </div>
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-wrench logo-small"><AiFillTool/></span>
      <h4 style={{color:"#303030"}}>best as possible </h4>
      <p>As a Club member, enjoy our Member Only Rate</p>
    </div>
  </div>
</div>
</>
  )

};

export default About;