import React from "react";

const SvgComponent = (props) => (
  <svg width={23} height={24} {...props}>
    <path d="M8 9h15v15H8z" />
    <path fill="#fff" d="M10 11h6v11h-6z" />
    <path d="M3 0v7h2V2h3v5h2V0H3zM1.719 5.156L0 6.156l7 12.125v-3.968L1.719 5.155z" />
  </svg>
);

export default SvgComponent;
