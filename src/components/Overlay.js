import React from "react";
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from "reactstrap";
import MyNav from "../components/Navbar";
import Button from "../components/Button";
import { FaBeer } from "react-icons/fa";
import Footer from "../components/Footer";
const Example = (props) => {
  return (
    <div>
      <Card inverse>
        <CardImg
          width="100%"
          height="100%"
          src="https://images.unsplash.com/photo-1516638129451-1a136c7bd25b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          alt="California City"
          style={{ maxHeight: "800px", bottom: "0" }}
        />
        <CardImgOverlay>
          <MyNav
            style={{ transparent: "true", height: "40px" }}
            one="About Me"
            two="My Projects"
            three="My Skills"
            four="Contact"
            link1="/aboutme"
          />
          <CardTitle>
            <h1 style={{ fontSize: 70 }}>
              Nicolas Ayala: Developing The Future
            </h1>
          </CardTitle>
          <CardText style={{ marginTop: "200px" }}>
            <Button text="Get Started" link="/aboutme">
              <FaBeer />
            </Button>
          </CardText>
        </CardImgOverlay>
        <Footer />
      </Card>
    </div>
  );
};

export default Example;
