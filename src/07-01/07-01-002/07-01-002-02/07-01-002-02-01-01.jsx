import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 14h72v7H0v-7z" />
    <path d="M72 7H0v7h72V7z" fill="#fff" />
    <path d="M0 0v7h72V0H0z" />
  </svg>
);

export default SvgComponent;
