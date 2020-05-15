import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M5 4H4v4H0v1h5V4z" />
    <path d="M3.5 0A3.5 3.5 0 000 3.5C0 4.784.377 5.978 1 7h2V5c-1.105 0-2-.672-2-1.5A2.5 2.5 0 013.5 1H7V0H3.5z" />
  </svg>
);

export default SvgComponent;
