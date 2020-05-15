import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M27 9.9V0h-9.9l2.011 2.01h5.878V7.89L27 9.899z" />
    <path d="M22.799 5.615L4.414 24 3 22.586 21.385 4.2l1.414 1.414zM0 12l5.5-5.5L11 12H9.586L5.5 7.914 1.414 12H0z" />
    <path d="M16 23C9.925 23 5 18.075 5 12h1c0 5.523 4.477 10 10 10h2v1h-2zM22 20l5.5-5.5L22 9v1.414l4.086 4.086L22 18.586V20z" />
    <path d="M11 4c0 6.075 4.925 11 11 11v-1c-5.523 0-10-4.477-10-10V2h-1v2z" />
  </svg>
);

export default SvgComponent;