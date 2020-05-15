import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M6 12h15v13H6z" />
    <path fill="#fff" d="M8 14h6v9H8z" />
    <path d="M11.094.094L9.688 1.5l8.5 8.5H21L11.094.094zM5.094.094L3.687 1.5l8.5 8.5H15L5.094.094zM1.625 2.813L.219 4.218 6 10h2.813L1.625 2.812z" />
  </svg>
);

export default SvgComponent;
