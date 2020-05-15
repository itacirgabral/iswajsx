import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M7 0L0 7h14L7 0zM6 7v11h13V7h-2v9H8V7H6z" />
  </svg>
);

export default SvgComponent;
