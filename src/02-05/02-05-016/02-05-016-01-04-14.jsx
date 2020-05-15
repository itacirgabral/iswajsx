import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M19 16C19 8.82 13.18 3 6 3v1c6.627 0 12 5.373 12 12v2h1v-2z" />
    <path d="M4.15 15.435L17.587 2 19 3.414 5.565 16.85l-1.414-1.414z" />
    <path d="M18 16C18 9.373 12.627 4 6 4v3a9 9 0 019 9v2h3v-2z" fill="#fff" />
    <path d="M15 16a9 9 0 00-9-9v1a8 8 0 018 8v2h1v-2zM6 11L.5 5.5 6 0v11zM9.9 21L0 11.1V21h9.9z" />
  </svg>
);

export default SvgComponent;
