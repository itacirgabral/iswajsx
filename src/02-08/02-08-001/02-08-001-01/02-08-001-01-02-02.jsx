import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M10 0a4 4 0 014 4v1h-1V4a3 3 0 00-3-3H9C7.343 1 6 2.79 6 5v9c0 3.283 4 9 4 9H0s4-5.717 4-9V5a5 5 0 015-5h1z" />
    <path d="M19 5l-5.5 5.5L8 5h11zm-2.438 1h-6.125L13.5 9.063 16.563 6z" />
  </svg>
);

export default SvgComponent;