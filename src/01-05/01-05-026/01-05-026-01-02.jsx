import React from "react";

const SvgComponent = (props) => (
  <svg width={18} height={27} {...props}>
    <path d="M6 0L0 6v21h12V6L6 0z" />
    <path d="M6 2.813l-4 4V25h4V2.812z" fill="#fff" />
    <path d="M15.531 2.219L11 6.75 12 10l5.656-5.656-2.125-2.125z" />
  </svg>
);

export default SvgComponent;
