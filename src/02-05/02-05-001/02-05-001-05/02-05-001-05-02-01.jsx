import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 0L1 7h14L8 0zm0 1.438L12.563 6H3.437L8 1.437zM7 7h2v7H7V7z" />
    <path d="M8 1.438L3.437 6h9.126L8 1.437z" fill="#fff" />
    <path d="M0 16v2h16v-2H0z" />
  </svg>
);

export default SvgComponent;