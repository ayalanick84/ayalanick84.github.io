import React, { useState } from "react";
import MyNav from "../components/Navbar";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";
import Banner from "../components/Banner";
import Button from "../components/Button";
import note from "../images/note.png";
import moodies from "../images/moodies-start.png";
import quaranscreen from "../images/quaranscreen1.png";
import rendezview from "../images/rendezview.png";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
function Projects() {
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
        My Projects
        <Link to="/skills">
          <FaArrowCircleRight size={60} />
        </Link>
      </h1>
      <Jumbotron
        image={note}
        title="Note Taker"
        descrip="With this simple app, the user can easily keep track of anything they need, whether it be 
        a grocery list, errands for the day, notes or anything else. Also, as you start knocking items
        of your list, you can easily click the delete button and remove it from your list."
        repo="https://github.com/ayalanick84/note-taker"
        page="https://shrouded-bastion-02810.herokuapp.com/
        "
      />
      <Jumbotron
        image={moodies}
        title="Moodies Food App"
        descrip="Moodies is a webpage made for helping people decide where to eat, based on their mood they are in, as well as the weather.
          Our webpage will take into account not only your location, but also your mood and the weather. 
          So that you'll never have to suffer through patio dining when its freezing outside, or constantly be interrupted by waiters when you are already in a bad mood."
        repo="https://github.com/sylhuynh/moodies"
        page="https://sylhuynh.github.io/moodies/"
      />
      <Jumbotron
        image={quaranscreen}
        title="QuaranScreen"
        descrip="Since we all have had more time during quarantine to catch up on our movie watchlists, 
      we created this app to easily keep track of movies want to watch, and also search for movies 
      that we might be interested in seeing."
        repo="https://github.com/keatonsmith5/watchList"
        page="https://quaranscreen.herokuapp.com/"
      />
      <Jumbotron
        image={rendezview}
        title="Rendez-View"
        descrip="Rendez-View is a webpage made for helping people plan a stay-at-home date, by providing a variety of cocktail, meal and movie choices.
       Our webpage will help you make a blueprint for a truly special night. 
       So that you'll never have to suffer through an underwhelming date, and will always wow that special someone.

      "
        repo="https://github.com/ramonpbarros/rendez-view"
        page="https://rendez-view-app.herokuapp.com/"
      />
      <Banner />
      <Button link="/skills" text="Continue" />
      <Footer />
    </div>
  );
}
export default Projects;
