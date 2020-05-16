import React from "react";

const SvgComponent = (props) => (
  <svg width={29} height={24} {...props}>
    <path d="M23.799 5.615L5.414 24 4 22.586 22.385 4.2l1.414 1.414zM18 15l5.5 5.5L29 15H18z" />
    <path d="M18.1 0L28 9.9V0h-9.9zM13 4c6.075 0 11 4.925 11 11h-1c0-5.523-4.477-10-10-10h-2V4h2zM6 17L.5 11.5 6 6v11z" />
    <path d="M17 22c0-6.075-4.925-11-11-11v1c5.523 0 10 4.477 10 10v2h1v-2z" />
  </svg>
);

export default SvgComponent;
