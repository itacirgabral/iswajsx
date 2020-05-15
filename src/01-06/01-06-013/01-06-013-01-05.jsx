import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M6 5h15v15H6z" />
    <path d="M8 7v2H6v3h2v6h6v-6h7V9h-7V7H8z" fill="#fff" />
    <path d="M2.844 0L0 2.813l6 6V5h1.813l-4.97-5z" />
  </svg>
);

export default SvgComponent;
