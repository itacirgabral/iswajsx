import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 0h15v15H0z" />
    <path d="M2 2v2H0v3h2v6h11V7h2V4h-2V2H2z" fill="#fff" />
    <path d="M16 0v10c0 2.03-1 2-1 2v3s3 .05 3-5V0h-2z" />
  </svg>
);

export default SvgComponent;
