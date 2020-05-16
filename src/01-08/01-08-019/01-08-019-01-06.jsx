import React from "react";

const SvgComponent = (props) => (
  <svg width={21} height={30} {...props}>
    <path d="M0 17h15v13H0zM6 0h2v15H6zM19 9l1.406 1.406L15.813 15H13l6-6z" />
  </svg>
);

export default SvgComponent;
