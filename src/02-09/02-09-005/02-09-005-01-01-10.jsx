import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M21 15l-5.5 5.5L10 15h11zM12 6a5 5 0 015 5v4h-3v-5a3 3 0 00-3-3H0V6h12z" />
    <path d="M10 0H9v24h1V0zM6 0H5v24h1V0z" />
    <path d="M9 0H6v24h3V0z" fill="#fff" />
  </svg>
);

export default SvgComponent;
