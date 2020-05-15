import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M1 0v5a3 3 0 003 3h12v3H5a5 5 0 01-5-5V0h1z" />
  </svg>
);

export default SvgComponent;
