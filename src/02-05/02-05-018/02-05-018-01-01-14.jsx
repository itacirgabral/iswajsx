import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M17 24C9.82 24 4 18.18 4 11h1c0 6.627 5.373 12 12 12h2v1h-2z" />
    <path
      d="M17 23c-6.627 0-12-5.373-12-12h3a9 9 0 009 9h2v3h-2z"
      fill="#fff"
    />
    <path d="M17 20a9 9 0 01-9-9h1a8 8 0 008 8h2v1h-2zM12 11L6.5 5.5 1 11h11zM9.9 28L0 18.1V28h9.9zM13 2c0 7.18 5.82 13 13 13v-1c-6.627 0-12-5.373-12-12V0h-1v2z" />
    <path
      d="M14 2c0 6.627 5.373 12 12 12v-3a9 9 0 01-9-9V0h-3v2z"
      fill="#fff"
    />
    <path d="M3.958 22.627L26.586 0 28 1.414 5.373 24.042l-1.415-1.415z" />
    <path d="M17 2a9 9 0 009 9v-1a8 8 0 01-8-8V0h-1v2zM26 7l5.5 5.5L26 18V7z" />
  </svg>
);

export default SvgComponent;
