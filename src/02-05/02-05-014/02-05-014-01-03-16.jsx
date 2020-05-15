import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M9.9 1H0v9.9l2.01-2.011V3.01H7.89L9.899 1z" />
    <path d="M5.657 5.201l18.385 18.385L22.628 25 4.243 6.615l1.414-1.414zM15 0l5.5 5.5L15 11V9.586L19.086 5.5 15 1.414V0z" />
    <path d="M4 16C4 9.925 8.925 5 15 5v1C9.477 6 5 10.477 5 16v2H4v-2zM22 7l5.5 5.5L22 18v-1.414l4.086-4.086L22 8.414V7z" />
    <path d="M11 23c0-6.075 4.925-11 11-11v1c-5.523 0-10 4.477-10 10v2h-1v-2z" />
  </svg>
);

export default SvgComponent;
