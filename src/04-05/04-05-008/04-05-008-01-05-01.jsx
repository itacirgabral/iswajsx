import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M10 0v3H0v2h10v3h1V5h2v3h1V5h1V3h-1V0h-1v3h-2V0h-1z" />
  </svg>
);

export default SvgComponent;
