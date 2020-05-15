import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 0v2h9V0H0zM12 0v2h9V0h-9z" />
  </svg>
);

export default SvgComponent;
