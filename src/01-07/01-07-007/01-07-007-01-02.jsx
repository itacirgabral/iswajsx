import React from "react";

const SvgComponent = (props) => (
  <svg width={21} height={30} {...props}>
    <path d="M21 22a8 8 0 11-16 0 8 8 0 1116 0z" />
    <path d="M13 16a6 6 0 000 12V16z" fill="#fff" />
    <path d="M9.406 2.406L7.97 3.812l10.031 10v1.938a8.055 8.055 0 012 2.375V13L9.406 2.406z" />
    <path d="M12 0v14.063a8.016 8.016 0 012 0V0h-2zM1.406 9.594L0 11l6.438 6.438a8.07 8.07 0 011.343-1.5L1.406 9.593z" />
  </svg>
);

export default SvgComponent;
