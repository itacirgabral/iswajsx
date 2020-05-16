import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={9} {...props}>
    <path d="M5 0a5 5 0 00-5 5v4h3V4a3 3 0 013-3h9V0H5z" />
  </svg>
);

export default SvgComponent;
