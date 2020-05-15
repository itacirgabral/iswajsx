import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M19 5c0 7.18-5.82 13-13 13v-1c6.627 0 12-5.373 12-12V3h1v2z" />
    <path d="M18 5c0 6.627-5.373 12-12 12v-3a9 9 0 009-9V3h3v2z" fill="#fff" />
    <path d="M15 5a9 9 0 01-9 9v-1a8 8 0 008-8V3h1v2zM6 10L.5 15.5 6 21V10zM10.9 0L1 9.9V0h9.9zM28 14c0 7.18-5.82 13-13 13v-1c6.627 0 12-5.373 12-12v-2h1v2z" />
    <path
      d="M27 14c0 6.627-5.373 12-12 12v-3a9 9 0 009-9v-2h3v2z"
      fill="#fff"
    />
    <path d="M4.958 5.373L27.586 28 29 26.586 6.373 3.958 4.958 5.373z" />
    <path d="M24 14a9 9 0 01-9 9v-1a8 8 0 008-8v-2h1v2zM15 19l-5.5 5.5L15 30V19z" />
  </svg>
);

export default SvgComponent;
