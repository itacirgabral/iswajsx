import React from "react";

const SvgComponent = (props) => (
  <svg width={29} height={19} {...props}>
    <path d="M16 4h13v15H16z" />
    <path fill="#fff" d="M18 6h9v11h-9z" />
    <path d="M0 4v3l14 .017V4H0z" />
    <path d="M3.375.156l-.688.688L14 12.188V10.75L3.375.156z" />
  </svg>
);

export default SvgComponent;
