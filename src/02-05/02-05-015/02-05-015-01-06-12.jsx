import React from "react";

const SvgComponent = (props) => (
  <svg width={24} height={28} {...props}>
    <path d="M14.1 27H24v-9.9l-2.01 2.011v5.878H16.11L14.101 27z" />
    <path d="M18.385 22.799L0 4.414 1.414 3 19.8 21.385l-1.414 1.414zM12 0l5.5 5.5L12 11V9.586L16.086 5.5 12 1.414V0z" />
    <path d="M1 16C1 9.925 5.925 5 12 5v1C6.477 6 2 10.477 2 16v2H1v-2zM4 22l5.5 5.5L15 22h-1.414L9.5 26.086 5.414 22H4z" />
    <path d="M20 11c-6.075 0-11 4.925-11 11h1c0-5.523 4.477-10 10-10h2v-1h-2z" />
  </svg>
);

export default SvgComponent;
