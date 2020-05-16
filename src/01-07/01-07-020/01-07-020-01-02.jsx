import React from "react";

const SvgComponent = (props) => (
  <svg width={17} height={30} {...props}>
    <path d="M2 15h15v15H2z" />
    <path fill="#fff" d="M4 17h6v11H4z" />
    <path d="M17 15V0h-2v15h2zM2 8L.594 9.406 6.187 15H9L2 8z" />
  </svg>
);

export default SvgComponent;
