import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8.5 0l-7 7h14l-7-7zM5 7h2v7H5V7zM10 7h2v7h-2V7z" />
    <path d="M7 7v7h3V7H7z" fill="#fff" />
    <path d="M0 16v2h17v-2H0z" />
  </svg>
);

export default SvgComponent;
