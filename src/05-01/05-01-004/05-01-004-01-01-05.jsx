import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 5h42V1H0v4zM49 10l-5-5 .719-.719L49 8.563l4.281-4.282L54 5l-5 5z" />
    <path d="M48.5 6h1V0h-1v6z" />
  </svg>
);

export default SvgComponent;