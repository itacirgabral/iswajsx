import React from "react";

const SvgComponent = (props) => (
  <svg width={19} height={15} {...props}>
    <path d="M0 9l5.5 5.5L11 9H0zM9 0a5 5 0 00-5 5v4h3V4a3 3 0 013-3h9V0H9z" />
  </svg>
);

export default SvgComponent;
