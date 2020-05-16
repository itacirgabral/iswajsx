import React from "react";

const SvgComponent = (props) => (
  <svg width={8} height={74} {...props}>
    <path d="M0 74V0h2v74H0zM6 74V0h2v74H6z" />
    <path d="M2 74V0h4v74H2z" fill="#fff" />
  </svg>
);

export default SvgComponent;
