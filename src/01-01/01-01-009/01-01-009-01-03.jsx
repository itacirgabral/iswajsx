import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M6 11h15v15H6zM0 0v7h2V2h4v9h2V0H0z" />
    <path d="M10 11v8h2v-8h-2zm5 0v8h2v-8h-2z" fill="#fff" />
  </svg>
);

export default SvgComponent;
