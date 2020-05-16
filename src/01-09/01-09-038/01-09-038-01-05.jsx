import React from "react";

const SvgComponent = (props) => (
  <svg width={29} height={19} {...props}>
    <path d="M16 4h13v15H16z" />
    <path fill="#fff" d="M18 6h5v11h-5z" />
    <path d="M0 4v1.989L14 6V4H0z" />
    <path d="M3.375.156L1.281 2.25 14 15v-4.25L3.375.156z" />
  </svg>
);

export default SvgComponent;
