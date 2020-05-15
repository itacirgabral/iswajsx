import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M6 0v2h7.5a4.5 4.5 0 010 9H10C4.477 11 0 15.477 0 21s4.477 10 10 10h3a5 5 0 110 10H2v4h9a9 9 0 100-18H8a6 6 0 010-12h4.5a7.5 7.5 0 100-15H6z" />
  </svg>
);

export default SvgComponent;