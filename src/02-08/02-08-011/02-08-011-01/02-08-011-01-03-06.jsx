import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M15 10l7 7h-2l-5-5-5 5H8l7-7z" />
    <path d="M6 0a6 6 0 016 6 5.992 5.992 0 01-1.75 4.25l-5.094 4.906A4.01 4.01 0 004 18v1a3 3 0 003 3 5 5 0 005-5h6a7 7 0 01-7 7H7a5 5 0 01-5-5v-1c0-1.657.664-3.164 1.75-4.25l5.094-4.906A4.01 4.01 0 0010 6a4 4 0 10-8 0v3H0V6a6 6 0 016-6z" />
  </svg>
);

export default SvgComponent;