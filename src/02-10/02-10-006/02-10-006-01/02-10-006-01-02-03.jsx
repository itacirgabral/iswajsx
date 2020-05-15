import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M6 14c2.761 0 5-3.134 5-7S8.761 0 6 0 1 3.134 1 7s2.239 7 5 7zm0-1.5v-11c1.933 0 3.5 2.462 3.5 5.5S7.933 12.5 6 12.5z" />
    <path
      d="M6 1.5v11c1.933 0 3.5-2.462 3.5-5.5S7.933 1.5 6 1.5z"
      fill="#fff"
    />
    <path d="M10 10l8 8v-8h-8zm2.406 1H17v4.563L12.406 11zM7 20c1.791 0 3.57-.696 4.938-2.063l2.843-3.156-1.375-1.375-2.875 3.125a4.978 4.978 0 01-7.062 0L1.406 14.22 0 15.625l2.063 2.313A6.963 6.963 0 007 20z" />
    <path d="M12.406 11L17 15.563V11h-4.594z" fill="#fff" />
  </svg>
);

export default SvgComponent;
