import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 .5V2h9V.5H0zM12 .5V2h9V.5h-9z" />
  </svg>
);

export default SvgComponent;
