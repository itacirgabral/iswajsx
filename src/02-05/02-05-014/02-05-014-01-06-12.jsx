import React from "react";

const SvgComponent = (props) => (
  <svg width={28} height={25} {...props}>
    <path d="M18.1 24H28v-9.9l-2.01 2.011v5.878H20.11L18.101 24z" />
    <path d="M22.343 19.799L3.958 1.414 5.372 0l18.385 18.385-1.414 1.414zM0 12l5.5 5.5L11 12H9.586L5.5 16.086 1.414 12H0z" />
    <path d="M16 1C9.925 1 5 5.925 5 12h1C6 6.477 10.477 2 16 2h2V1h-2zM7 19l5.5 5.5L18 19h-1.414L12.5 23.086 8.414 19H7z" />
    <path d="M23 8c-6.075 0-11 4.925-11 11h1c0-5.523 4.477-10 10-10h2V8h-2z" />
  </svg>
);

export default SvgComponent;
