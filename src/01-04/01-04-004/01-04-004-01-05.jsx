import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M7 0L0 7v15h14V7L7 0z" />
    <path d="M7 2.813l-5 5.03V8H0v3h2v9h6v-9h6V8H8V3.812l-1-1z" fill="#fff" />
    <path d="M2 13h5v3H2z" />
  </svg>
);

export default SvgComponent;
