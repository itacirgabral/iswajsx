import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M24 18.1V28h-9.9l2.011-2.01h5.878V20.11L24 18.101z" />
    <path d="M19.799 22.343L1.414 3.958 0 5.372l18.385 18.385 1.414-1.414zM12 0l5.5 5.5L12 11V9.586L16.086 5.5 12 1.414V0z" />
    <path d="M1 16C1 9.925 5.925 5 12 5v1C6.477 6 2 10.477 2 16v2H1v-2zM19 7l5.5 5.5L19 18v-1.414l4.086-4.086L19 8.414V7z" />
    <path d="M8 23c0-6.075 4.925-11 11-11v1c-5.523 0-10 4.477-10 10v2H8v-2z" />
  </svg>
);

export default SvgComponent;