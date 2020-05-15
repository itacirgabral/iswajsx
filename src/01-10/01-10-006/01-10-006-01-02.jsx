import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M6 0h15v15H6z" />
    <path fill="#fff" d="M8 2h6v11H8z" />
    <path d="M2.219 4.469l-1.719 1L6 15v-3.969L2.219 4.47z" />
  </svg>
);

export default SvgComponent;