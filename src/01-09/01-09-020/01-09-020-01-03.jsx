import React from "react";

const SvgComponent = (props) => (
  <svg width={23} height={30} {...props}>
    <path d="M8 15h15v15H8zM8 0h2v15H8zM4.938 15.063l1.437 1.406L2.812 20 8 25.188V28l-8-8 4.938-4.938z" />
  </svg>
);

export default SvgComponent;
