import React from "react";

const SvgComponent = (props) => (
  <svg width={29} height={15} {...props}>
    <path d="M14 0h15v15H14z" />
    <path fill="#fff" d="M16 2h6v11h-6z" />
    <path d="M0 0v1.989L14 2V0H0zM1.969 6.719l-.532 1.906L14 12V9.906L1.969 6.72z" />
  </svg>
);

export default SvgComponent;
