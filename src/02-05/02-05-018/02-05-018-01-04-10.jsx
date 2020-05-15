import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M12 5c0 7.18 5.82 13 13 13v-1c-6.627 0-12-5.373-12-12V3h-1v2z" />
    <path
      d="M13 5c0 6.627 5.373 12 12 12v-3a9 9 0 01-9-9V3h-3v2z"
      fill="#fff"
    />
    <path d="M16 5a9 9 0 009 9v-1a8 8 0 01-8-8V3h-1v2zM25 10l5.5 5.5L25 21V10zM20.1 0L30 9.9V0h-9.9zM16 27C8.82 27 3 21.18 3 14h1c0 6.627 5.373 12 12 12h2v1h-2z" />
    <path d="M16 26C9.373 26 4 20.627 4 14h3a9 9 0 009 9h2v3h-2z" fill="#fff" />
    <path d="M26.042 5.373L3.414 28 2 26.586 24.627 3.958l1.415 1.415z" />
    <path d="M16 23a9 9 0 01-9-9h1a8 8 0 008 8h2v1h-2zM11 14L5.5 8.5 0 14h11z" />
  </svg>
);

export default SvgComponent;