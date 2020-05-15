import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M17.5 10C7.835 10 0 17.835 0 27.5S7.835 45 17.5 45 35 37.165 35 27.5 27.165 10 17.5 10zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16zM19.188 0L13 6.188l.719.687L19.875.687 19.187 0z" />
    <path
      d="M19.875.688l-6.156 6.187 1.406 1.438 6.188-6.188L19.875.687z"
      fill="#fff"
    />
    <path d="M21.313 2.125l-6.188 6.188.688.687L22 2.812l-.688-.687z" />
  </svg>
);

export default SvgComponent;
