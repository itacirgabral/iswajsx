import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 0L0 8h2.719l5.219-5.25L13.188 8H16L8 0zM4 8v31l12-11.688V39h2V22.5l-12 12V8H4z" />
    <path d="M10 8v16.813l12-12V39h2V8L12 20V8h-2z" />
    <path d="M6 8v26.5l12-12V39h4V12.812l-12 12V8H6z" fill="#fff" />
  </svg>
);

export default SvgComponent;
