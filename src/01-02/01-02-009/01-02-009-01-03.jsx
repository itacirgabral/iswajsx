import React from "react";

const SvgComponent = (props) => (
  <svg width={19} height={30} {...props}>
    <path d="M4 15h15v15H4zM0 6v6h2V8h2v7h2V6H0zM9 0h2v15H9z" />
  </svg>
);

export default SvgComponent;
