import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 4l4-4 .719.719L1.406 4 4.72 7.281 4 8 0 4z" />
    <path d="M4 2h5v1H4V2zM4 5h5v1H4V5z" />
  </svg>
);

export default SvgComponent;
