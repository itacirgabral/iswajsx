import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M24 51l7-7-7-7v2l5 5-5 5v2z" />
    <path d="M24 46v-1H10a7 7 0 01-7-7v-2a7 7 0 017-7h14a5 5 0 005-5v-2a5 5 0 00-5-5H10a7 7 0 01-7-7V8a7 7 0 017-7h18V0H10a8 8 0 00-8 8v2a8 8 0 008 8h14a4 4 0 014 4v2a4 4 0 01-4 4H10a8 8 0 00-8 8v2a8 8 0 008 8h14z" />
    <path
      d="M24 45v-2H10a5 5 0 01-5-5v-2a5 5 0 015-5h14a7 7 0 007-7v-2a7 7 0 00-7-7H10a5 5 0 01-5-5V8a5 5 0 015-5h18V1H10a7 7 0 00-7 7v2a7 7 0 007 7h14a5 5 0 015 5v2a5 5 0 01-5 5H10a7 7 0 00-7 7v2a7 7 0 007 7h14z"
      fill="#fff"
    />
    <path d="M24 43v-1H10a4 4 0 01-4-4v-2a4 4 0 014-4h14a8 8 0 008-8v-2a8 8 0 00-8-8H10a4 4 0 01-4-4V8a4 4 0 014-4h18V3H10a5 5 0 00-5 5v2a5 5 0 005 5h14a7 7 0 017 7v2a7 7 0 01-7 7H10a5 5 0 00-5 5v2a5 5 0 005 5h14z" />
    <path d="M4 33a4 4 0 110 8 4 4 0 010-8zM30 19a4 4 0 110 8 4 4 0 010-8zM4 5a4 4 0 110 8 4 4 0 010-8z" />
  </svg>
);

export default SvgComponent;
