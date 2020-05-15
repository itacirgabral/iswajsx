import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M11 8h15v13H11z" />
    <path fill="#fff" d="M13 10h6v9h-6z" />
    <path d="M8 0C4 0 4 4 4 4v1c0 4 4 4 4 4V7C6 7 6 5 6 5V4c0-2 2-2 2-2h1c2 0 2 2 2 2v2h2V4c0-4-4-4-4-4H8zM1.813 5L.405 6.406 10 16v-2.813L1.812 5z" />
  </svg>
);

export default SvgComponent;
