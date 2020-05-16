import React from "react";

const SvgComponent = (props) => (
  <svg width={20} height={15} {...props}>
    <path d="M5 0h15v15H5z" />
    <path fill="#fff" d="M5 4h15v3H5z" />
    <path d="M1.719 5.344L5 11.03V15L0 6.344l1.719-1z" />
  </svg>
);

export default SvgComponent;
