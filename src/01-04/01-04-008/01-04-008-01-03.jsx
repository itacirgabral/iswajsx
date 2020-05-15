import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M15 0v15h8V0h-8zM0 0h15v4H0z" />
    <path d="M20 10h-5V7h5v3z" fill="#fff" />
  </svg>
);

export default SvgComponent;
