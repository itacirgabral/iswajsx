import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 0L0 8h16L8 0zM4 8h2v34H4V8zM10 8h2v34h-2V8z" />
    <path d="M6 8v34h4V8H6z" fill="#fff" />
    <path d="M0 23v4h16v-4H0z" />
  </svg>
);

export default SvgComponent;
