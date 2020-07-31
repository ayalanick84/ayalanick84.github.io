import React from "react";
import { Jumbotron, Container, Col, Row } from "reactstrap";

const Example = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid style={{ width: "70%" }}>
          <Row style={{ margin: "20px" }}>
            <Col>
              <h1 className="display-3" style={{ fontWeight: "bolder" }}>
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
              <p style={{ fontWeight: "bold" }} className="lead">
                {props.descrip}
              </p>
              <a style={{ fontSize: "20px" }} href={props.repo} target="_blank">
                Github Repo
              </a>
              <br />
              <a style={{ fontSize: "20px" }} href={props.page} target="_blank">
                Deployed Page
              </a>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Example;
