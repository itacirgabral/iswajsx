import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 0v5.656h1V1h4.656V0H0z" />
    <path d="M3.188 2.469l-.72.719L6 6.717 6.719 6 3.187 2.469z" />
  </svg>
);

export default SvgComponent;
