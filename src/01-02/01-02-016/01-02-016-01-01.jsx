import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 15h15v15H0z" />
    <path fill="#fff" d="M2 17h11v11H2z" />
    <path d="M9 6l4 4-4 4v1h2l5-5-7-7v3zM7 0h2v15H7z" />
  </svg>
);

export default SvgComponent;
