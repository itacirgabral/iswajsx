import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M3 0v5h1V1h4V0H3z" />
    <path d="M5.469 1.75l-.719.719L7.594 5.28l.687-.687L5.47 1.75zM6 11V6H5v4H1v1h5z" />
    <path d="M1.406 5.719l-.687.687L3.53 9.25l.719-.719L1.406 5.72z" />
  </svg>
);

export default SvgComponent;