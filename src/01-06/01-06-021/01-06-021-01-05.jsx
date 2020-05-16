import React from "react";

const SvgComponent = (props) => (
  <svg width={26} height={21} {...props}>
    <path d="M5 8h15v13H5z" />
    <path fill="#fff" d="M7 10h6v9H7z" />
    <path d="M1.406.594L0 2l4 4h2.813L1.405.594zM24.594 9.594L21 13.188V16l5-5-1.406-1.406z" />
  </svg>
);

export default SvgComponent;
