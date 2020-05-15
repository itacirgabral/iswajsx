import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M4 0L0 4l.719.719L4 1.406 7.281 4.72 8 4 4 0z" />
    <path d="M2 4v5h1V4H2zM5 4v5h1V4H5z" />
  </svg>
);

export default SvgComponent;
