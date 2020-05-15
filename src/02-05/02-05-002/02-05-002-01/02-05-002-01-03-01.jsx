import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M7 0L0 7h2.719l4.219-4.25L11.188 7H14L7 0zM6 7h2v7H6V7z" />
    <path d="M20 0l-7 7h2.719l4.219-4.25L24.188 7H27l-7-7zM19 7h2v7h-2V7z" />
  </svg>
);

export default SvgComponent;
