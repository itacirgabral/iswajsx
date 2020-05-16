import React from "react";

const SvgComponent = (props) => (
  <svg width={22} height={26} {...props}>
    <path d="M0 11h15v15H0z" />
    <path fill="#fff" d="M2 13h6v11H2z" />
    <path d="M7 0v7h2V2h4v7h2V0H7zM17 14v2h3v3h-4v2h6v-7h-5z" />
  </svg>
);

export default SvgComponent;
