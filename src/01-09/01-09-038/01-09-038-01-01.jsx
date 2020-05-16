import React from "react";

const SvgComponent = (props) => (
  <svg width={29} height={19} {...props}>
    <path d="M14 4h15v15H14z" />
    <path fill="#fff" d="M16 6h11v11H16z" />
    <path d="M0 4v1.989L14 6V4H0z" />
    <path d="M3.375.156L1.281 2.25 14 15v-4.25L3.375.156z" />
  </svg>
);

export default SvgComponent;
