import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M74 5H32v4h42V5zM25 0l5 5-.719.719L25 1.437 20.719 5.72 20 5l5-5z" />
    <path d="M25.5 4h-1v6h1V4zM15 0l5 5-.719.719L15 1.437 10.719 5.72 10 5l5-5z" />
    <path d="M15.5 4h-1v6h1V4zM5 0l5 5-.719.719L5 1.437.719 5.72 0 5l5-5z" />
    <path d="M5.5 4h-1v6h1V4z" />
  </svg>
);

export default SvgComponent;
