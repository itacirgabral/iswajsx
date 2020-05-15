import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M27 14.1V24h-9.9l2.011-2.01h5.878V16.11L27 14.101z" />
    <path d="M22.799 18.385L4.414 0 3 1.414 21.385 19.8l1.414-1.414zM0 12l5.5 5.5L11 12H9.586L5.5 16.086 1.414 12H0z" />
    <path d="M16 1C9.925 1 5 5.925 5 12h1C6 6.477 10.477 2 16 2h2V1h-2zM22 4l5.5 5.5L22 15v-1.414L26.086 9.5 22 5.414V4z" />
    <path d="M11 20c0-6.075 4.925-11 11-11v1c-5.523 0-10 4.477-10 10v2h-1v-2z" />
  </svg>
);

export default SvgComponent;
