import React from "react";

const SvgComponent = (props) => (
  <svg width={8} height={8} {...props}>
    <path d="M0 0v5.656h1V1h4.656V0H0z" />
    <path d="M1.414 4.243L4.95 7.778l.707-.707L2.12 3.536l-.707.707zM3.536 2.121L7.07 5.657l.707-.707-3.535-3.536-.707.707z" />
  </svg>
);

export default SvgComponent;
