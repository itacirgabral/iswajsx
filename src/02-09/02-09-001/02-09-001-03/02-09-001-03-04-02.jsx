import React from "react";

const SvgComponent = (props) => (
  <svg width={23} height={15} {...props}>
    <path d="M8 0a8 8 0 00-8 8v7h4V7a5 5 0 015-5h14V0H8z" />
  </svg>
);

export default SvgComponent;
