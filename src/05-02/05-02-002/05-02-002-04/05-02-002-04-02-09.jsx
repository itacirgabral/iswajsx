import React from "react";

const SvgComponent = (props) => (
  <svg width={5} height={48} {...props}>
    <path d="M5 0H0v48h5V0z" />
  </svg>
);

export default SvgComponent;
