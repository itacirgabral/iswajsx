import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M21 18a8 8 0 11-16 0 8 8 0 1116 0z" />
    <path d="M13 12a6 6 0 000 12V12z" fill="#fff" />
    <path d="M7 0v10a9.978 9.978 0 012-1.188V0H7zM1.406 6.406L0 7.813l4.656 4.656c.371-.56.809-1.059 1.282-1.531L1.405 6.405z" />
  </svg>
);

export default SvgComponent;
