import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M11 6V1h-1v4H6v1h5z" />
    <path d="M6.406.719l-.687.687L8.53 4.25l.719-.719L6.406.72zM0 3v5h1V4h4V3H0z" />
    <path d="M2.469 4.75l-.719.719L4.594 8.28l.687-.687L2.47 4.75z" />
  </svg>
);

export default SvgComponent;