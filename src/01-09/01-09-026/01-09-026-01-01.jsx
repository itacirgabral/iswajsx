import React from "react";

const SvgComponent = (props) => (
  <svg width={23} height={24} {...props}>
    <path d="M8 9h15v15H8z" />
    <path fill="#fff" d="M10 11h11v11H10z" />
    <path d="M3 0v7h2V2h3v7h2V0H3zM1.719 5.156L0 6.156 8 20v-3.969L1.719 5.156z" />
  </svg>
);

export default SvgComponent;
