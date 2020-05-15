import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 15v4h14v9H2v2h20V15H0zM14 0h2v15h-2z" />
  </svg>
);

export default SvgComponent;
