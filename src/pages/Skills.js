import React from "react";
import { Link } from "react-router-dom";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import MyNav from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import monitor from "../images/monitor.jpg";
import lighthouse from "../images/lighthouse.jpg";
import SkillJumbo from "../components/SkillJumbo";

function Skills() {
  function goBack() {
    window.history.back();
  }
  return (
    <div style={{ backgroundColor: "#36454f" }}>
      <MyNav
        style={{ transparent: "true", height: "40px" }}
        one="About Me"
        two="My Projects"
        three="My Skills"
        four="Contact"
        link1="/aboutme"
        link2="/projects"
        link3="/skills"
        link4="/contact"
      />
      <h1
        style={{
          fontSize: "90px",
          fontWeight: "bolder",
          margin: "50px auto",
          color: "white",
        }}
      >
        <button style={{ color: "#f54c4c" }} onClick={goBack} className="btn">
          <FaArrowCircleLeft size={60} />
        </button>
        My Skills
        <Link to="/contact">
          <FaArrowCircleRight size={60} />
        </Link>
      </h1>
      <SkillJumbo
        title="Being the best Developer I can Be"
        image={monitor}
        descrip="Full-stack web developer with a certificate from the University of California, 
      San Diego Extension Web Development Bootcamp. Skills in Node.js, mySQL, mongoDB, JavaScript, React, jQuery, 
       HTML, and CSS frameworks. Although I am relatively new to web development, I will bring a fresh and 
       passionate insight to any web development project that I am assigned, as well as work to ensure that
        all of my work utilizes up-to-date approaches such as mobile-first design and progressive web applications . 
        "
        descrip2="I am fluent in both English and Spanish, and have lived in both San Diego, CA and Guadalajara, Jalisco,
          Mexico. My current goal is to work somewhere with interesting and challenging projects that allow me to
           apply both my state-of-the-art training and natural creativity."
      />
      <SkillJumbo
        image={lighthouse}
        title="Always Growing as a Person"
        descrip="I am fluent in both English and Spanish, and have lived in both San Diego, CA and Guadalajara, Jalisco,
          Mexico. My current goal is to work somewhere with interesting and challenging projects that allow me to
           apply both my state-of-the-art training and natural creativity."
      />
      <Button link="/contact" text="Continue" />
      <Footer />
    </div>
  );
}
export default Skills;
