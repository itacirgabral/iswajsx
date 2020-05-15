import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M11 6L5.5.5 0 6h11zM6 6v5a3 3 0 003 3h12v3H10a5 5 0 01-5-5V6h1z" />
  </svg>
);

export default SvgComponent;
