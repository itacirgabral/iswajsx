import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 6h15v13H8z" />
    <path fill="#fff" d="M10 8h6v9h-6z" />
    <path d="M4 0C0 0 0 4 0 4v2h2V4c0-2 2-2 2-2h2c2 0 2 2 2 2h1.906C10 0 6 0 6 0H4zM0 13v2c0 4 4 4 4 4h3v-2H4c-2 0-2-2-2-2v-2H0z" />
  </svg>
);

export default SvgComponent;