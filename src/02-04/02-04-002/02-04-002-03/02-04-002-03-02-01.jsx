import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 0L0 8h16L8 0zm0 1.438l5.531 5.53H2.47L8 1.439zM4 8h2v34H4V8zM10 8h2v34h-2V8z" />
    <path d="M6 8v34h4V8H6zM8 1.438l-5.531 5.53H13.53L8 1.439z" fill="#fff" />
    <path d="M8 19.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11z" />
  </svg>
);

export default SvgComponent;
