import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M9.9 24H0v-9.9l2.01 2.011v5.878H7.89L9.899 24z" />
    <path d="M5.657 19.799L24.042 1.414 22.628 0 4.243 18.385l1.414 1.414zM15 25l5.5-5.5L15 14v1.414l4.086 4.086L15 23.586V25z" />
    <path d="M4 9c0 6.075 4.925 11 11 11v-1C9.477 19 5 14.523 5 9V7H4v2zM22 18l5.5-5.5L22 7v1.414l4.086 4.086L22 16.586V18z" />
    <path d="M11 2c0 6.075 4.925 11 11 11v-1c-5.523 0-10-4.477-10-10V0h-1v2z" />
  </svg>
);

export default SvgComponent;
