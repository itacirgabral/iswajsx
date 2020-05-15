import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M6.5.5L0 7h2.719l3.719-3.75L10.188 7H13L6.5.5zM3 7h2v15H3V7zM8 7h2v15H8V7z" />
    <path d="M5 7v15h3V7H5z" fill="#fff" />
    <path d="M4 16l-3 6h11l-3-6H4z" />
  </svg>
);

export default SvgComponent;