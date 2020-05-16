import React from "react";

const SvgComponent = (props) => (
  <svg width={21} height={26} {...props}>
    <path d="M0 11h15v15H0zM13 0v11h-2V0h2z" />
    <path d="M19.375 4.625l1.406 1.438L15 11.813V11h-2l6.375-6.375z" />
  </svg>
);

export default SvgComponent;
