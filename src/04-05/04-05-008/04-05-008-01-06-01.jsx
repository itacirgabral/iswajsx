import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M5 0v3h10v2H5v3H4V5H2v3H1V5H0V3h1V0h1v3h2V0h1z" />
  </svg>
);

export default SvgComponent;
