import React from "react";

const SvgComponent = (props) => (
  <svg width={28} height={25} {...props}>
    <path d="M18.1 24H28v-9.9l-2.01 2.011v5.878H20.11L18.101 24z" />
    <path d="M22.343 19.799L3.958 1.414 5.372 0l18.385 18.385-1.414 1.414zM13 25l-5.5-5.5L13 14v1.414L8.914 19.5 13 23.586V25z" />
    <path d="M24 9c0 6.075-4.925 11-11 11v-1c5.523 0 10-4.477 10-10V7h1v2zM6 18L.5 12.5 6 7v1.414L1.914 12.5 6 16.586V18z" />
    <path d="M17 2c0 6.075-4.925 11-11 11v-1c5.523 0 10-4.477 10-10V0h1v2z" />
  </svg>
);

export default SvgComponent;
