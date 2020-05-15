import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 0h15v15H0z" />
    <path fill="#fff" d="M2 2h6v11H2z" />
    <path d="M16 0v10c0 2.03-1 2-1 2v3s3 .05 3-5V0h-2z" />
  </svg>
);

export default SvgComponent;