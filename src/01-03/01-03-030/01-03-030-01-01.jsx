import React from "react";

const SvgComponent = (props) => (
  <svg width={24} height={30} {...props}>
    <path d="M9 15h15v15H9z" />
    <path fill="#fff" d="M11 17h11v11H11z" />
    <path d="M4 11s-4 0-4 4v3h3v-3c0-1 1-1 1-1h4c1 0 1 1 1 1h3s0-4-4-4H4zM15 15h2V0h-2v15z" />
    <path d="M1.719 9.406l-1.719 1L9 26v-3.969L1.719 9.406z" />
  </svg>
);

export default SvgComponent;
