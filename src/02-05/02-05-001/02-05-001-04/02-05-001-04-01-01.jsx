import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 0L0 8h16L8 0zM7 8h2v42H7V8z" />
  </svg>
);

export default SvgComponent;