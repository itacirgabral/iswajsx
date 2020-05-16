import React from "react";

const SvgComponent = (props) => (
  <svg width={13} height={4} {...props}>
    <path d="M4 0v2H0v2h5V2h3v2h5V2H9V0H4z" />
  </svg>
);

export default SvgComponent;
