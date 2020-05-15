import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 18l9 9 9-9H0zm2.406 1h13.188L9 25.563 2.406 19zM16 0a9 9 0 00-9 9v9h4V8a6 6 0 016-6h17V0H16z" />
    <path d="M2.406 19L9 25.563 15.594 19H2.406z" fill="#fff" />
  </svg>
);

export default SvgComponent;
