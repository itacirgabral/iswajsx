import React from "react";

const SvgComponent = (props) => (
  <svg width={23} height={30} {...props}>
    <path d="M0 15h15v15H0z" />
    <path fill="#fff" d="M2 17h11v11H2z" />
    <path d="M13 3h2v12h-2zM10 0H8v15h2V0zM21.375 15.813L15 22.186V25l7.781-7.781-1.406-1.407z" />
  </svg>
);

export default SvgComponent;
