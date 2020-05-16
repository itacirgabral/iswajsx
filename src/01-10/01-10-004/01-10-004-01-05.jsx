import React from "react";

const SvgComponent = (props) => (
  <svg width={18} height={15} {...props}>
    <path d="M0 0h15v15H0z" />
    <path d="M2 2v2H0v3h2v6h6V7h7V4H8V2H2z" fill="#fff" />
    <path d="M16 0v10c0 2.03-1 2-1 2v3s3 .05 3-5V0h-2z" />
  </svg>
);

export default SvgComponent;
