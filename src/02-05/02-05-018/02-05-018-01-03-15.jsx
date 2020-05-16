import React from "react";

const SvgComponent = (props) => (
  <svg width={39} height={20} {...props}>
    <path d="M38 9v2H17V9h21zM14 9v2H7V9h7zM7 17l-7-7 7-7v2.844L2.844 10 7 14.156V17zM11 5L15.5.5 20 5h-1.406L15.5 1.906 12.406 5H11z" />
    <path d="M16 5v10c0 1.105.672 2 1.5 2s1.5-.895 1.5-2v-1h5v1c0 2.21-2.015 4-4.5 4S15 17.21 15 15V5h1zM30 16l4.5-4.5L39 16h-1.406L34.5 12.906 31.406 16H30z" />
    <path d="M28 1v15a2 2 0 004 0h5c0 2.21-2.239 4-5 4s-5-1.79-5-4V1h1z" />
  </svg>
);

export default SvgComponent;
