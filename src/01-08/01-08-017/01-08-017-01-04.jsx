import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 8h15v15H0z" />
    <path d="M2 10v2H0v3h2v6h11v-6h2v-3h-2v-2H2z" fill="#fff" />
    <path d="M4 8h2V3s0 1 0 0 1-1 1-1h6V0H7s3 0 0 0-3 3-3 3v5z" />
    <path d="M8 4h4v4H8z" />
  </svg>
);

export default SvgComponent;