import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M9.9 27H0v-9.9l2.01 2.011v5.878H7.89L9.899 27z" />
    <path d="M5.615 22.799L24 4.414 22.586 3 4.2 21.385l1.414 1.414zM12 0L6.5 5.5 12 11V9.586L7.914 5.5 12 1.414V0z" />
    <path d="M23 16c0-6.075-4.925-11-11-11v1c5.523 0 10 4.477 10 10v2h1v-2zM20 22l-5.5 5.5L9 22h1.414l4.086 4.086L18.586 22H20z" />
    <path d="M4 11c6.075 0 11 4.925 11 11h-1c0-5.523-4.477-10-10-10H2v-1h2z" />
  </svg>
);

export default SvgComponent;
