import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 11h15v15H8z" />
    <path fill="#fff" d="M10 13h6v11h-6z" />
    <path d="M15 0v7h2V2h4v7h2V0h-8zM0 18v2h6v-2H0z" />
  </svg>
);

export default SvgComponent;