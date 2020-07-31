import React from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import MyNav from "../components/Navbar";
import Footer from "../components/Footer";
import selfie from "../images/selfie.jpg";
import ContactJumbo from "../components/ContactJumbo";

function Contact() {
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
        Contact
      </h1>
      <ContactJumbo image={selfie} title="Lets Keep in Touch!" />
      <Footer />
    </div>
  );
}
export default Contact;
