import React from "react";

const SvgComponent = (props) => (
  <svg width={23} height={30} {...props}>
    <path d="M0 15h15v15H0z" />
    <path fill="#fff" d="M2 17h11v11H2z" />
    <path d="M13 0h2v15h-2zM21.375 17.813L15 24.188V27l7.781-7.781-1.406-1.407z" />
  </svg>
);

export default SvgComponent;
