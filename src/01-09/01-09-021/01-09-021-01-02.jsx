import React from "react";

const SvgComponent = (props) => (
  <svg width={24} height={26} {...props}>
    <path d="M0 11h15v15H0z" />
    <path fill="#fff" d="M2 13h6v11H2z" />
    <path d="M7 0v7h2V2h4v9h2V0H7zM15 17v2h9v-2h-9z" />
  </svg>
);

export default SvgComponent;
