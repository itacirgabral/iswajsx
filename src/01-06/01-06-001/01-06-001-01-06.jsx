import React from "react";

const SvgComponent = (props) => (
  <svg width={18} height={30} {...props}>
    <path d="M2 17h15v13H2zM1.406 6.406L0 7.813 7.188 15H10L1.406 6.406z" />
    <path d="M8 0h2v15H8z" />
    <path d="M16.594 6.406L8 15h2.813L18 7.812l-1.406-1.406z" />
  </svg>
);

export default SvgComponent;
