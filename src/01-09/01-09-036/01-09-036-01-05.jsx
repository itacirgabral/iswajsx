import React from "react";

const SvgComponent = (props) => (
  <svg width={29} height={15} {...props}>
    <path d="M16 0h13v15H16z" />
    <path fill="#fff" d="M18 2h5v11h-5z" />
    <path d="M0 0v1.989L14 2V0H0zM1.969 6.719l-.532 1.906L14 12V9.906L1.969 6.72z" />
  </svg>
);

export default SvgComponent;
