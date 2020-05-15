import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M5 0a5 5 0 00-5 5v2a5 5 0 005 5h8V9H5a3 3 0 01-3-3V4a3 3 0 013-3h12V0H5z" />
  </svg>
);

export default SvgComponent;
