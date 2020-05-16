import React from "react";

const SvgComponent = (props) => (
  <svg width={21} height={30} {...props}>
    <path d="M0 15h15v15H0zM6 0h2v15H6z" />
    <path d="M19 9l1.406 1.406L15 15.812V15h-2l6-6z" />
  </svg>
);

export default SvgComponent;
