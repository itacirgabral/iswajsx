import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 3.5L3.5 7l.719-.719L1.406 3.5 4.22.719 3.5 0 0 3.5z" />
    <path d="M3 4h4V3H3v1zM8 9.5L4.5 13l-.719-.719L6.594 9.5 3.78 6.719 4.5 6 8 9.5z" />
    <path d="M5 10H1V9h4v1z" />
  </svg>
);

export default SvgComponent;
