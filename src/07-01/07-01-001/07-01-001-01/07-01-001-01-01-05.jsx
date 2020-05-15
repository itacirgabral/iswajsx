import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 0h74v2H0V0zM0 6h74v2H0V6z" />
    <path d="M0 2h74v4H0V2z" fill="#fff" />
  </svg>
);

export default SvgComponent;
