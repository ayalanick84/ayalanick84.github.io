import React from "react";
import { Jumbotron, Container, Col, Row } from "reactstrap";
import resume from "../images/resume.pdf";

const Example = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid style={{ width: "70%" }}>
          <Row style={{ margin: "20px" }}>
            <Col>
              <h1 className="display-3" style={{ fontWeight: "bold" }}>
                {props.title}
              </h1>
            </Col>
          </Row>
          <Row>
            <Col sm="6">
              <img
                style={{ maxHeight: "600px", maxWidth: "400px" }}
                src={props.image}
                alt={props.title}
              />
            </Col>
            <Col sm="6">
              <h1
                style={{
                  fontWeight: "bold",
                  fontSize: "35px",
                  margin: "20px",
                  maxHeight: "20px",
                }}
                className="lead"
              >
                <a href={`mailto:${"ayalanick84@gmail.com"}`} target="_blank">
                  {" "}
                  Email Me
                </a>
              </h1>
              <br />
              <h1
                style={{
                  fontWeight: "bold",
                  fontSize: "35px",
                  maxHeight: "20px",
                  margin: "20px",
                }}
                className="lead"
              >
                <a
                  href="https://www.linkedin.com/in/nicolas-ayala-11143119a/"
                  target="_blank"
                >
                  {" "}
                  Linked In
                </a>
              </h1>
              <br />
              <h1
                style={{
                  fontWeight: "bold",
                  fontSize: "35px",
                  margin: "30px",
                }}
                className="lead"
              >
                <a href="https://github.com/ayalanick84" target="_blank">
                  {" "}
                  Github
                </a>
              </h1>
              <h1
                style={{
                  fontWeight: "bold",
                  fontSize: "35px",
                  margin: "30px",
                }}
                className="lead"
              >
                <a href={resume} target="_blank">
                  {" "}
                  View Resume
                </a>
              </h1>

              <h1
                style={{
                  fontWeight: "bold",
                  fontSize: "35px",
                  margin: "30px",
                }}
                className="lead"
              >
                <a href={resume} download>
                  {" "}
                  Download Resume
                </a>
              </h1>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Example;
