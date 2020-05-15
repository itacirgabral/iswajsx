import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M9 15h15v15H9zM9 0h2v15H9zM0 22h9v2H0z" />
  </svg>
);

export default SvgComponent;