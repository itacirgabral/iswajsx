import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M7 10l-7 7h14l-7-7zm0 1.406L11.563 16H2.437L7 11.406z" />
    <path d="M16 0a6 6 0 00-6 6c0 1.657.664 3.164 1.75 4.25l5.094 4.906A4.01 4.01 0 0118 18v1a3 3 0 01-3 3 5 5 0 01-5-5H4a7 7 0 007 7h4a5 5 0 005-5v-1a5.992 5.992 0 00-1.75-4.25l-5.094-4.906A4.01 4.01 0 0112 6a4 4 0 118 0v3h2V6a6 6 0 00-6-6z" />
    <path d="M7 11.406L2.437 16h9.126L7 11.406z" fill="#fff" />
  </svg>
);

export default SvgComponent;
