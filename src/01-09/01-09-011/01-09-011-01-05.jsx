import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M6 15h8v15H6z" />
    <path fill="#fff" d="M7 16h3v13H7z" />
    <path d="M3 15c-3 0-3 3-3 3v3h2v-3c0-1 1-1 1-1h1v-2H3zM7 0h1v13H7zM10 2h1v11h-1zM13 4h1v9h-1zM20.375 18.813L15 24.188V27l6.781-6.781-1.406-1.407z" />
  </svg>
);

export default SvgComponent;