import React from "react";

const SvgComponent = (props) => (
  <svg width={23} height={26} {...props}>
    <path d="M8 11h15v15H8z" />
    <path fill="#fff" d="M10 13h6v11h-6z" />
    <path d="M15 0v7h2V2h4v9h2V0h-8zM0 18v2h8v-2H0z" />
  </svg>
);

export default SvgComponent;
