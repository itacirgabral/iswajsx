import React from "react";

const SvgComponent = (props) => (
  <svg width={27} height={24} {...props}>
    <path d="M8 0L0 8l8 8V0zM7 2.438v11.124L1.406 8 7 2.437zM8 7v2h12a5 5 0 015 5v1a5 5 0 01-5 5h-1v4a8 8 0 008-8v-2a7 7 0 00-7-7H8z" />
    <path d="M7 2.438L1.406 8 7 13.563V2.437z" fill="#fff" />
  </svg>
);

export default SvgComponent;
