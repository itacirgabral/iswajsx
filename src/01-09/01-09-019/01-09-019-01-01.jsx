import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 15h15v15H0z" />
    <path fill="#fff" d="M2 17h11v11H2z" />
    <path d="M13 0h2v15h-2zM16 15v10c0 2.03-1 2-1 2v3s3 .05 3-5V15h-2z" />
  </svg>
);

export default SvgComponent;
