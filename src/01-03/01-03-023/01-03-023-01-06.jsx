import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 17h15v13H0zM0 3h2v12H0zM5 0h2v15H5z" />
    <path d="M8 23.5a2.5 2.5 0 11-5 0 2.5 2.5 0 115 0z" fill="#fff" />
  </svg>
);

export default SvgComponent;
