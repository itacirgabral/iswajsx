import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={30} {...props}>
    <path d="M11.594 3.406L0 15h2.813L13.03 4.812l-1.437-1.406z" />
    <path d="M6 0h2v15H6zM0 17h15v13H0z" />
  </svg>
);

export default SvgComponent;
