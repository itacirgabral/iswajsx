import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M3 4h1v11H3zM6 4h1v11H6z" />
    <path fill="#fff" d="M4 4h2v11H4z" />
    <path d="M5 0L0 5l.719.719L5 1.437 9.281 5.72 10 5 5 0z" />
  </svg>
);

export default SvgComponent;
