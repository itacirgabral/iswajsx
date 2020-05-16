import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={8} {...props}>
    <path d="M1 0v3.25H0v1.5h1V8h1V4.75h2V8h1V4.75h10v-1.5H5V0H4v3.25H2V0H1z" />
  </svg>
);

export default SvgComponent;
