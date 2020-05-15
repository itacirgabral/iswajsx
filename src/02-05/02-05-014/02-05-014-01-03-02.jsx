import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M1 9.9V0h9.9L8.888 2.01H3.01V7.89L1 9.899z" />
    <path d="M5.201 5.657l18.385 18.385L25 22.628 6.615 4.243 5.201 5.657zM0 15l5.5 5.5L11 15H9.586L5.5 19.086 1.414 15H0z" />
    <path d="M16 4C9.925 4 5 8.925 5 15h1C6 9.477 10.477 5 16 5h2V4h-2zM7 22l5.5 5.5L18 22h-1.414L12.5 26.086 8.414 22H7z" />
    <path d="M23 11c-6.075 0-11 4.925-11 11h1c0-5.523 4.477-10 10-10h2v-1h-2z" />
  </svg>
);

export default SvgComponent;