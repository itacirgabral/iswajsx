import React from "react";

const SvgComponent = (props) => (
  <svg width={21} height={20} {...props}>
    <path d="M6 6c2.761 0 5 3.134 5 7s-2.239 7-5 7-5-3.134-5-7 2.239-7 5-7zm0 1.5v11c1.933 0 3.5-2.462 3.5-5.5S7.933 7.5 6 7.5z" />
    <path
      d="M6 7.5v11c1.933 0 3.5-2.462 3.5-5.5S7.933 7.5 6 7.5z"
      fill="#fff"
    />
    <path d="M10 10l8-8v8h-8zm2.406-1H17V4.437L12.406 9zM7 0c1.791 0 3.57.696 4.938 2.063l2.843 3.156-1.375 1.375-2.875-3.125a4.978 4.978 0 00-7.062 0L1.406 5.78 0 4.375l2.063-2.313A6.963 6.963 0 017 0z" />
    <path d="M12.406 9L17 4.437V9h-4.594z" fill="#fff" />
    <path d="M13 13l8-8v8h-8zm2.406-1H20V7.437L15.406 12z" />
    <path d="M15.406 12L20 7.437V12h-4.594z" fill="#fff" />
  </svg>
);

export default SvgComponent;
