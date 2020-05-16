import React from "react";

const SvgComponent = (props) => (
  <svg width={13} height={4} {...props}>
    <path d="M4 .5V2H0v1.5h5V2h3v1.5h5V2H9V.5H4z" />
  </svg>
);

export default SvgComponent;
