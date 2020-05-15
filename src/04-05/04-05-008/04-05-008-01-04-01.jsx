import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M4 0v3H0v2h4v3h1V5h2v3h1V5h2v3h1V5h4V3h-4V0h-1v3H8V0H7v3H5V0H4z" />
  </svg>
);

export default SvgComponent;
