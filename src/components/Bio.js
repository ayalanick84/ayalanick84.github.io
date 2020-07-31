import React from "react";
import { Row, Col } from "reactstrap";
function Bio(props) {
  return (
    <Row>
      <Col sm="6">
        <img
          style={{
            maxHeight: "400px",
            maxWidth: "500px",
            minWidth: "70%",
            minHeight: "55%",
            margin: "20px",
          }}
          src={props.image}
          alt={props.alt}
        />
      </Col>
      <Col sm="6">
        <h4 style={{ color: "white", top: "200px", margin: "30px auto" }}>
          {props.text}
        </h4>
      </Col>
    </Row>
  );
}
export default Bio;
