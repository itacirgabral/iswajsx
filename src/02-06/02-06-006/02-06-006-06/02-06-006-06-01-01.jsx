import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 0v14L1 7l7-7z" />
    <path d="M8 5v1h14a7 7 0 017 7v2a7 7 0 01-7 7H8a5 5 0 00-5 5v2a5 5 0 005 5h14a7 7 0 017 7v2a7 7 0 01-7 7H4v1h18a8 8 0 008-8v-2a8 8 0 00-8-8H8a4 4 0 01-4-4v-2a4 4 0 014-4h14a8 8 0 008-8v-2a8 8 0 00-8-8H8z" />
    <path
      d="M8 6v2h14a5 5 0 015 5v2a5 5 0 01-5 5H8a7 7 0 00-7 7v2a7 7 0 007 7h14a5 5 0 015 5v2a5 5 0 01-5 5H4v2h18a7 7 0 007-7v-2a7 7 0 00-7-7H8a5 5 0 01-5-5v-2a5 5 0 015-5h14a7 7 0 007-7v-2a7 7 0 00-7-7H8z"
      fill="#fff"
    />
    <path d="M8 8v1h14a4 4 0 014 4v2a4 4 0 01-4 4H8a8 8 0 00-8 8v2a8 8 0 008 8h14a4 4 0 014 4v2a4 4 0 01-4 4H4v1h18a5 5 0 005-5v-2a5 5 0 00-5-5H8a7 7 0 01-7-7v-2a7 7 0 017-7h14a5 5 0 005-5v-2a5 5 0 00-5-5H8z" />
  </svg>
);

export default SvgComponent;
