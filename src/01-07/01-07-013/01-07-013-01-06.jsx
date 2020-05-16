import React from "react";

const SvgComponent = (props) => (
  <svg width={21} height={26} {...props}>
    <path d="M0 13h15v13H0zM13 0v11h-2V0h2zM19.375 4.625l1.406 1.438L15.813 11H13l6.375-6.375z" />
  </svg>
);

export default SvgComponent;
