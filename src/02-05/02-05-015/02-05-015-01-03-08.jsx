import React from "react";

const SvgComponent = (props) => (
  <svg width={24} height={29} {...props}>
    <path d="M14.1 1H24v9.9l-2.01-2.011V3.01H16.11L14.101 1z" />
    <path d="M18.385 5.201L0 23.586 1.414 25 19.8 6.615l-1.414-1.414zM9 0L3.5 5.5 9 11V9.587L4.914 5.5 9 1.414V.001z" />
    <path d="M20 16C20 9.925 15.075 5 9 5v1c5.523 0 10 4.477 10 10v2h1v-2zM18 23l-5.5 5.5L7 23h1.414l4.086 4.087L16.586 23H18z" />
    <path d="M2 12c6.075 0 11 4.925 11 11h-1c0-5.523-4.477-10-10-10H0v-1h2z" />
  </svg>
);

export default SvgComponent;
