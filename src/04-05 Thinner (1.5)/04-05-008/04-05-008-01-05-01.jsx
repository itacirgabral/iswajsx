import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M10 0v3.25H0v1.5h10V8h1V4.75h2V8h1V4.75h1v-1.5h-1V0h-1v3.25h-2V0h-1z" />
  </svg>
);

export default SvgComponent;
