import React from "react";

import { FaGithubSquare } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer d-flex justify-content-center mt-5">
      <a
        href="https://github.com/ayalanick84"
        target="_blank"
        className="fa zoomIcon mr-2 mt-3"
        style={{ color: "white" }}
      >
        <FaGithubSquare />
      </a>
      <p className="mt-3" style={{ color: "white", fontSize: "15px" }}>
        © Copyright
      </p>
    </footer>
  );
}

export default Footer;
