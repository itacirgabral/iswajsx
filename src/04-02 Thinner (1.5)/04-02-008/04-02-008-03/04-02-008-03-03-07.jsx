import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 3.5L4.5 7l-.719-.719L6.594 3.5 3.78.719 4.5 0 8 3.5z" />
    <path d="M5 4H1V3h4v1zM0 9.5L3.5 13l.719-.719L1.406 9.5 4.22 6.719 3.5 6 0 9.5z" />
    <path d="M3 10h4V9H3v1z" />
  </svg>
);

export default SvgComponent;