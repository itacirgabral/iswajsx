import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 0L0 8h16L8 0zm0 1.438L13.563 7H2.437L8 1.437zM4 8v33.313l14-14V43h2V22.5l-14 14V8H4z" />
    <path d="M10 8v18.813l14-14V43h2V8L12 22V8h-2z" />
    <path
      d="M6 8v28.5l14-14V43h4V12.812l-14 14V8H6zM8 1.438L2.437 7h11.126L8 1.437z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;