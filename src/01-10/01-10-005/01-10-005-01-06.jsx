import React from "react";

const SvgComponent = (props) => (
  <svg width={24} height={15} {...props}>
    <path d="M9 0h15v15H9z" />
    <path d="M9 4v3h15V4H9z" fill="#fff" />
    <path d="M5.469 1.563l1.406 1.406L3.344 6.5 9 12.188V15L.5 6.5l4.969-4.938z" />
  </svg>
);

export default SvgComponent;
