import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 8h15v13H8zM5 0C0 0 0 5 0 5v3h2V5c0-3 3-3 3-3 3 0 3 3 3 3v1h2V5c0-5-5-5-5-5z" />
    <path d="M5 2s-1.077-.009-1.938.625L7 17.281V9.5L5 2z" />
  </svg>
);

export default SvgComponent;