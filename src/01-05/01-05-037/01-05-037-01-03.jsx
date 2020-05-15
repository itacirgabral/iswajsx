import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M9 5h8v15H9z" />
    <path d="M0 0v3c4.97 0 9 2.239 9 5V5h2.125C9.346 2.066 5.038 0 0 0z" />
  </svg>
);

export default SvgComponent;