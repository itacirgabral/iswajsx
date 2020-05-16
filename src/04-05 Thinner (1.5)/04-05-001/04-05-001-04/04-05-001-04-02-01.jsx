import React from "react";

const SvgComponent = (props) => (
  <svg width={11} height={10} {...props}>
    <path d="M5.5 0a5 5 0 100 10 5 5 0 000-10zm0 1a4 4 0 110 8 4 4 0 010-8z" />
    <path d="M5.5 1c-.255 0-.508.048-.75.094v3.062c0 1.304-2.719 2.813-2.719 2.813A3.973 3.973 0 005.5 9a3.973 3.973 0 003.469-2.031S6.25 5.46 6.25 4.156V1.094C6.008 1.048 5.755 1 5.5 1z" />
  </svg>
);

export default SvgComponent;
