import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M58 10H16v4h42v-4zM14 19l-5 5-.719-.719L12.562 19l-4.28-4.281L9 14l5 5z" />
    <path d="M10 19.5v-1H4v1h6zM0 12l5 5 .719-.719L1.437 12 5.72 7.719 5 7l-5 5z" />
    <path d="M4 12.5v-1h6v1H4zM14 5l-5 5-.719-.719L12.562 5 8.282.719 9 0l5 5z" />
    <path d="M10 5.5v-1H4v1h6z" />
  </svg>
);

export default SvgComponent;