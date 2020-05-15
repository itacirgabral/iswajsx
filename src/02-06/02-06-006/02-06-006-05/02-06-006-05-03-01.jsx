import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M7 0L0 7l7 7v-2L2 7l5-5V0z" />
    <path d="M7 5v1h6a7 7 0 017 7v2a7 7 0 01-7 7H9a5 5 0 00-5 5v2a5 5 0 005 5h4a7 7 0 017 7v2a7 7 0 01-7 7H3v1h10a8 8 0 008-8v-2a8 8 0 00-8-8H9a4 4 0 01-4-4v-2a4 4 0 014-4h4a8 8 0 008-8v-2a8 8 0 00-8-8H7z" />
    <path
      d="M7 6v2h6a5 5 0 015 5v2a5 5 0 01-5 5H9a7 7 0 00-7 7v2a7 7 0 007 7h4a5 5 0 015 5v2a5 5 0 01-5 5H3v2h10a7 7 0 007-7v-2a7 7 0 00-7-7H9a5 5 0 01-5-5v-2a5 5 0 015-5h4a7 7 0 007-7v-2a7 7 0 00-7-7H7z"
      fill="#fff"
    />
    <path d="M7 8v1h6a4 4 0 014 4v2a4 4 0 01-4 4H9a8 8 0 00-8 8v2a8 8 0 008 8h4a4 4 0 014 4v2a4 4 0 01-4 4H3v1h10a5 5 0 005-5v-2a5 5 0 00-5-5H9a7 7 0 01-7-7v-2a7 7 0 017-7h4a5 5 0 005-5v-2a5 5 0 00-5-5H7z" />
  </svg>
);

export default SvgComponent;
