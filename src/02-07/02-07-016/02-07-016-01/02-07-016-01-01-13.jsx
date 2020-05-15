import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M7 37V25l-6 6 6 6z" />
    <path d="M7 33v-1h5a5 5 0 005-5v-2a5 5 0 00-5-5H8a3 3 0 01-3-3v-1a3 3 0 013-3h4a5 5 0 005-5V6a5 5 0 00-5-5H4V0h8a6 6 0 016 6v2a6 6 0 01-6 6H8a2 2 0 00-2 2v1a2 2 0 002 2h4a6 6 0 016 6v2a6 6 0 01-6 6H7z" />
    <path
      d="M7 32v-2h5a3 3 0 003-3v-2a3 3 0 00-3-3H8a5 5 0 01-5-5v-1a5 5 0 015-5h4a3 3 0 003-3V6a3 3 0 00-3-3H4V1h8a5 5 0 015 5v2a5 5 0 01-5 5H8a3 3 0 00-3 3v1a3 3 0 003 3h4a5 5 0 015 5v2a5 5 0 01-5 5H7z"
      fill="#fff"
    />
    <path d="M7 30v-1h5a2 2 0 002-2v-2a2 2 0 00-2-2H8a6 6 0 01-6-6v-1a6 6 0 016-6h4a2 2 0 002-2V6a2 2 0 00-2-2H4V3h8a3 3 0 013 3v2a3 3 0 01-3 3H8a5 5 0 00-5 5v1a5 5 0 005 5h4a3 3 0 013 3v2a3 3 0 01-3 3H7z" />
    <path d="M16 3a4 4 0 100 8 4 4 0 000-8zM16 22a4 4 0 100 8 4 4 0 000-8zM4 12.5a4 4 0 100 8 4 4 0 000-8z" />
  </svg>
);

export default SvgComponent;
