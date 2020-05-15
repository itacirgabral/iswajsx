import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M1.406 0L0 1.406 22.594 24 24 22.594 1.406 0z" />
    <path d="M22.594 0L24 1.406 1.406 24 0 22.594 22.594 0z" />
  </svg>
);

export default SvgComponent;
