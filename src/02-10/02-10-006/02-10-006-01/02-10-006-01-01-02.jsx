import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M6 6c-2.761 0-5 3.134-5 7s2.239 7 5 7 5-3.134 5-7-2.239-7-5-7zm0 1.5v11c-1.933 0-3.5-2.462-3.5-5.5S4.067 7.5 6 7.5z" />
    <path
      d="M6 7.5c-1.933 0-3.5 2.462-3.5 5.5s1.567 5.5 3.5 5.5v-11z"
      fill="#fff"
    />
    <path d="M18 10V2l-8 8h8zM7 0c1.791 0 3.57.696 4.938 2.063l2.843 3.156-1.375 1.375-2.875-3.125a4.978 4.978 0 00-7.062 0L1.406 5.78 0 4.375l2.063-2.313A6.963 6.963 0 017 0z" />
  </svg>
);

export default SvgComponent;
