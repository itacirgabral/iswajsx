import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 6V1h1v4h4v1H0z" />
    <path d="M4.594.719L1.75 3.53l.719.719L5.28 1.406 4.594.72zM11 3v5h-1V4H6V3h5z" />
    <path d="M8.531 4.75L5.72 7.594l.687.687L9.25 5.47l-.719-.719z" />
  </svg>
);

export default SvgComponent;
