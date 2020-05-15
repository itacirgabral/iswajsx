import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 0h2v15H0zM0 15h15v15H0z" />
  </svg>
);

export default SvgComponent;