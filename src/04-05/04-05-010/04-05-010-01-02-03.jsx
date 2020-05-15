import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 4l4-4 .719.719L1.406 4 4.72 7.281 4 8 0 4z" />
    <path d="M4 3.5v1h5v-1H4z" />
  </svg>
);

export default SvgComponent;
