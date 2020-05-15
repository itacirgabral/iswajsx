import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M14 4h15v15H14z" />
    <path fill="#fff" d="M16 6h11v11H16z" />
    <path d="M0 4v3l14 .017V4H0z" />
    <path d="M3.375.156l-.688.688L14 12.188V10.75L3.375.156z" />
  </svg>
);

export default SvgComponent;