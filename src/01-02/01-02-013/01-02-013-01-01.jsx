import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 15h15v15H0z" />
    <path fill="#fff" d="M2 17h11v11H2z" />
    <path d="M3.406 3.406L15 15h-2.812L1.969 4.812l1.437-1.406z" />
    <path d="M7 0h2v15H7z" />
  </svg>
);

export default SvgComponent;