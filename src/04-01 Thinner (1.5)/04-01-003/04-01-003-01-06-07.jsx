import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M10 5L5 0l-.719.719L8.563 5 4.28 9.281 5 10l5-5z" />
    <path d="M6 3H0v1h6V3zM6 6H0v1h6V6z" />
  </svg>
);

export default SvgComponent;