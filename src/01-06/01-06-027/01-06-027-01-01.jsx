import React from "react";

const SvgComponent = (props) => (
  <svg width={20} height={30} {...props}>
    <path d="M5 15h15v15H5z" />
    <path fill="#fff" d="M7 17h11v11H7z" />
    <path d="M18 0h2v15h-2zM1.406 9.594L0 11l5 5v-1h1.813L1.405 9.594z" />
  </svg>
);

export default SvgComponent;
