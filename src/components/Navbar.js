import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import Link from "react-router-dom";

const Example = (props) => {
  return (
    <div>
      <Nav>
        <NavItem>
          <NavLink
            style={{ fontSize: "30px", textDecoration: "none", color: "white" }}
            href={props.link1}
          >
            {props.one}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            style={{ fontSize: "30px", textDecoration: "none", color: "white" }}
            href={props.link2}
          >
            {props.two}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            style={{ fontSize: "30px", textDecoration: "none", color: "white" }}
            href={props.link3}
          >
            {props.three}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            style={{ fontSize: "30px", textDecoration: "none", color: "white" }}
            href={props.link4}
          >
            {props.four}
          </NavLink>
        </NavItem>
      </Nav>
      <hr />
    </div>
  );
};

export default Example;
