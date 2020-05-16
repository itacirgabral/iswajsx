import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={8} {...props}>
    <path d="M4 0v3.25H0v1.5h4V8h1V4.75h2V8h1V4.75h2V8h1V4.75h4v-1.5h-4V0h-1v3.25H8V0H7v3.25H5V0H4z" />
  </svg>
);

export default SvgComponent;
