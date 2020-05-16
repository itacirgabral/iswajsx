import React from "react";

const SvgComponent = (props) => (
  <svg width={20} height={30} {...props}>
    <path d="M5 15h15v15H5z" />
    <path fill="#fff" d="M7 17h6v11H7z" />
    <path d="M18 0h2v15h-2zM9 5H7v10h2V5zM1.406 9.406L0 10.844l5 5V15h2L1.406 9.406z" />
  </svg>
);

export default SvgComponent;
