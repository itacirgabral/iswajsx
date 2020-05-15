import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M6 0h15v15H6z" />
    <path d="M8 2v2H6v3h2v6h6V7h7V4h-7V2H8z" fill="#fff" />
    <path d="M2.219 4.469l-1.719 1L6 15v-3.969L2.219 4.47z" />
  </svg>
);

export default SvgComponent;