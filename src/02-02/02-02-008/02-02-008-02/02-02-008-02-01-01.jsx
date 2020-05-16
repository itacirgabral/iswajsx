import React from "react";

const SvgComponent = (props) => (
  <svg width={10} height={6} {...props}>
    <path d="M5 .281l-5 5L.719 6 5 1.719 9.281 6 10 5.281l-5-5z" />
  </svg>
);

export default SvgComponent;
