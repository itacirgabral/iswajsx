import React from "react";

const SvgComponent = (props) => (
  <svg width={21} height={26} {...props}>
    <path d="M6 13h15v13H6zM0 0v7h2V2h4v9h2V0H0z" />
    <path d="M10 13v8h2v-8h-2zm5 0v8h2v-8h-2z" fill="#fff" />
  </svg>
);

export default SvgComponent;
