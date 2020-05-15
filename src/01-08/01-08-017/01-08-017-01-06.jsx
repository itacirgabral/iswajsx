import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 8h15v15H0z" />
    <path d="M0 12v3h15v-3H0z" fill="#fff" />
    <path d="M11 8H9V3s0 1 0 0-1-1-1-1H2V0h6S5 0 8 0s3 3 3 3v5z" />
    <path d="M3 4h4v4H3z" />
  </svg>
);

export default SvgComponent;
