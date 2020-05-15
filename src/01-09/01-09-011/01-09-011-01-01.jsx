import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M6 15h8v15H6z" />
    <path fill="#fff" d="M7 16h6v13H7z" />
    <path d="M3 15c-3 0-3 3-3 3v3h2v-3c0-1 1-1 1-1h3v-2H3zM10 0h1v15h-1zM7 2h1v13H7zM4 4h1v11H4zM20.375 18.813L14 25.188V28l7.781-7.781-1.406-1.407z" />
  </svg>
);

export default SvgComponent;
