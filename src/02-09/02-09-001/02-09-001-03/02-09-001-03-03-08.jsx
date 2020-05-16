import React from "react";

const SvgComponent = (props) => (
  <svg width={27} height={24} {...props}>
    <path d="M8 0v2L2 8l6 6v2L0 8l8-8zM8 7v2h12a5 5 0 015 5v1a5 5 0 01-5 5h-1v4a8 8 0 008-8v-2a7 7 0 00-7-7H8z" />
  </svg>
);

export default SvgComponent;
