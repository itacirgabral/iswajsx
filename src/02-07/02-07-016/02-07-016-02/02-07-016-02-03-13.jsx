import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 51l-7-7 7-7v2l-5 5 5 5v2z" />
    <path d="M8 46v-1h6a7 7 0 007-7v-2a7 7 0 00-7-7h-4a5 5 0 01-5-5v-2a5 5 0 015-5h4a7 7 0 007-7V8a7 7 0 00-7-7H4V0h10a8 8 0 018 8v2a8 8 0 01-8 8h-4a4 4 0 00-4 4v2a4 4 0 004 4h4a8 8 0 018 8v2a8 8 0 01-8 8H8z" />
    <path
      d="M8 45v-2h6a5 5 0 005-5v-2a5 5 0 00-5-5h-4a7 7 0 01-7-7v-2a7 7 0 017-7h4a5 5 0 005-5V8a5 5 0 00-5-5H4V1h10a7 7 0 017 7v2a7 7 0 01-7 7h-4a5 5 0 00-5 5v2a5 5 0 005 5h4a7 7 0 017 7v2a7 7 0 01-7 7H8z"
      fill="#fff"
    />
    <path d="M8 43v-1h6a4 4 0 004-4v-2a4 4 0 00-4-4h-4a8 8 0 01-8-8v-2a8 8 0 018-8h4a4 4 0 004-4V8a4 4 0 00-4-4H4V3h10a5 5 0 015 5v2a5 5 0 01-5 5h-4a7 7 0 00-7 7v2a7 7 0 007 7h4a5 5 0 015 5v2a5 5 0 01-5 5H8z" />
    <path d="M4 19a4 4 0 100 8 4 4 0 000-8zM20 33a4 4 0 100 8 4 4 0 000-8zM20 5a4 4 0 100 8 4 4 0 000-8z" />
  </svg>
);

export default SvgComponent;
