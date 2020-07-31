import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const Example = (props) => {
  return (
    <div>
      <Link to={props.link}>
        <Button
          size="lg"
          color="success"
          style={{ width: 150, height: 50, margin: "10px" }}
        >
          {props.text}
        </Button>{" "}
      </Link>
    </div>
  );
};

export default Example;
