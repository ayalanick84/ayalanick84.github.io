import React from "react";
import MyNav from "../components/Navbar";
import Footer from "../components/Footer";
import Bio from "../components/Bio";
import Button from "../components/Button";
import { Container } from "reactstrap";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import selfie from "../images/selfie.jpg";
import sandiego from "../images/postcard.jpg";
import mariachi from "../images/mariachi.jpg";
import team from "../images/team.jpg";

function Test() {
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
        Hello, I'm Nico
        <Link to="/projects">
          <FaArrowCircleRight size={60} />
        </Link>
      </h1>
      <br style={{ color: "white" }} />
      <Container>
        <Bio
          image={selfie}
          image={selfie}
          alt="Myself"
          text="I am Nicolas Ayala, and I will bring a fresh and creative insight to any web 
          development project that I am assigned. I currently hold a certificate from the UCSD 
          Extension Web Development Bootcamp and am constantly working towards learning new aspects 
          and trends of web development. "
        />
        <Bio
          image={team}
          alt="Young Team Working"
          text=" Although I am relatively new to web development, I have worked professionally in many 
          music groups, which has given me a lot of experience working in a team. My current goal is to work
           somewhere with interesting and challenging projects that allow me to show both my skills and creativity."
        />
        <Bio
          image={sandiego}
          alt="San Diego postcard"
          text="I was born in San Diego to Mexican parents in 1997. I have always been a proud Chicano,
           while also doing my best to learn about my Mexican roots. All of my life, I have had a very creative and 
           studious mind, which led me to have a lifelong passion for all aspects of music, and later led me to 
           pursue the path of web development."
        />
        <Bio
          image={mariachi}
          alt="Mariachi Band"
          text="When I am not studying or working on projects, I am usually working on my other passion, Mariachi Music.
          I fell in love with playing mariachi when I was 18, and I have never stopped doing it, each week I play
          my favorite music at private events, festivals, restaurants and more!"
        />
        <Button text="Continue" link="/projects" />
        <Footer />
      </Container>
    </div>
  );
}
export default Test;
