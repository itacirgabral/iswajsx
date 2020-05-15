import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M14 10V8.5L17.5 5 14 1.5V0l5 5-5 5zM9 3a9 9 0 00-9 9v6h1v-6a8 8 0 018-8h5V3H9z" />
    <path d="M9 4a8 8 0 00-8 8v6h2v-6a6 6 0 016-6h5V4H9z" fill="#fff" />
    <path d="M9 6a6 6 0 00-6 6v6h1v-6a5 5 0 015-5h5V6H9zM8 27l-5-5h1.5L8 25.5l3.5-3.5H13l-5 5z" />
    <path d="M6 22v-3a9 9 0 019-9h6v1h-6a8 8 0 00-8 8v3H6z" />
    <path d="M7 22v-3a8 8 0 018-8h6v2h-6a6 6 0 00-6 6v3H7z" fill="#fff" />
    <path d="M9 22v-3a6 6 0 016-6h6v1h-6a5 5 0 00-5 5v3H9z" />
  </svg>
);

export default SvgComponent;
