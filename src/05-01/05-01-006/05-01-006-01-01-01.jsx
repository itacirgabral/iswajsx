import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 16h42v4H0v-4zM19 4h1v11h-1zM22 4h1v11h-1z" />
    <path fill="#fff" d="M20 4h2v11h-2z" />
    <path d="M21 0l-5 5 .719.719L21 1.437l4.281 4.282L26 5l-5-5z" />
  </svg>
);

export default SvgComponent;
