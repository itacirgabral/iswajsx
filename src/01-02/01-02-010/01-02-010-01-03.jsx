import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={30} {...props}>
    <path d="M0 15h15v15H0zM0 0h2v15H0zM4 6v6h2V8h2v7h2V6H4z" />
  </svg>
);

export default SvgComponent;
