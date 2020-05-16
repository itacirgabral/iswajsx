import React from "react";

const SvgComponent = (props) => (
  <svg width={24} height={27} {...props}>
    <path d="M0 12h15v15H0zM9 2v6h2V4h2v8h2V2H9z" />
    <path d="M7 12V0H1v6h2V2h2v10h2z" fillRule="evenodd" />
    <path fill="#fff" d="M2 14h6v11H2z" />
    <path d="M15 19h9v2h-9z" />
  </svg>
);

export default SvgComponent;
