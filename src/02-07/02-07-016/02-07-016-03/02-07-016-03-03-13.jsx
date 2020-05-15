import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M10 51l-7-7 7-7v2l-5 5 5 5v2z" />
    <path d="M10 46v-1h14a7 7 0 007-7v-2a7 7 0 00-7-7H10a5 5 0 01-5-5v-2a5 5 0 015-5h14a7 7 0 007-7V8a7 7 0 00-7-7H6V0h18a8 8 0 018 8v2a8 8 0 01-8 8H10a4 4 0 00-4 4v2a4 4 0 004 4h14a8 8 0 018 8v2a8 8 0 01-8 8H10z" />
    <path
      d="M10 45v-2h14a5 5 0 005-5v-2a5 5 0 00-5-5H10a7 7 0 01-7-7v-2a7 7 0 017-7h14a5 5 0 005-5V8a5 5 0 00-5-5H6V1h18a7 7 0 017 7v2a7 7 0 01-7 7H10a5 5 0 00-5 5v2a5 5 0 005 5h14a7 7 0 017 7v2a7 7 0 01-7 7H10z"
      fill="#fff"
    />
    <path d="M10 43v-1h14a4 4 0 004-4v-2a4 4 0 00-4-4H10a8 8 0 01-8-8v-2a8 8 0 018-8h14a4 4 0 004-4V8a4 4 0 00-4-4H6V3h18a5 5 0 015 5v2a5 5 0 01-5 5H10a7 7 0 00-7 7v2a7 7 0 007 7h14a5 5 0 015 5v2a5 5 0 01-5 5H10z" />
    <path d="M30 33a4 4 0 100 8 4 4 0 000-8zM4 19a4 4 0 100 8 4 4 0 000-8zM30 5a4 4 0 100 8 4 4 0 000-8z" />
  </svg>
);

export default SvgComponent;
