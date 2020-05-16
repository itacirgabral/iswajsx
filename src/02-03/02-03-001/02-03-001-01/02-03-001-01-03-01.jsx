import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={15} {...props}>
    <path d="M7.5 0l-7 7h2.719l4.219-4.25L11.688 7H14.5l-7-7zM4 7h2v8H4V7zM9 7h2v8H9V7z" />
    <path d="M6 7v8h3V7H6z" fill="#fff" />
  </svg>
);

export default SvgComponent;
