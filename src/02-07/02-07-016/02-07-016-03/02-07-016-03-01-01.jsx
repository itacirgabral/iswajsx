import React from "react";

const SvgComponent = (props) => (
  <svg width={38} height={51} {...props}>
    <path d="M12 0v14L5 7l7-7z" />
    <path d="M12 5v1h14a7 7 0 017 7v2a7 7 0 01-7 7H12a5 5 0 00-5 5v2a5 5 0 005 5h14a7 7 0 017 7v2a7 7 0 01-7 7H8v1h18a8 8 0 008-8v-2a8 8 0 00-8-8H12a4 4 0 01-4-4v-2a4 4 0 014-4h14a8 8 0 008-8v-2a8 8 0 00-8-8H12z" />
    <path
      d="M12 6v2h14a5 5 0 015 5v2a5 5 0 01-5 5H12a7 7 0 00-7 7v2a7 7 0 007 7h14a5 5 0 015 5v2a5 5 0 01-5 5H8v2h18a7 7 0 007-7v-2a7 7 0 00-7-7H12a5 5 0 01-5-5v-2a5 5 0 015-5h14a7 7 0 007-7v-2a7 7 0 00-7-7H12z"
      fill="#fff"
    />
    <path d="M12 8v1h14a4 4 0 014 4v2a4 4 0 01-4 4H12a8 8 0 00-8 8v2a8 8 0 008 8h14a4 4 0 014 4v2a4 4 0 01-4 4H8v1h18a5 5 0 005-5v-2a5 5 0 00-5-5H12a7 7 0 01-7-7v-2a7 7 0 017-7h14a5 5 0 005-5v-2a5 5 0 00-5-5H12z" />
    <path d="M0 27v2h12v-2H0zM26 13v2h12v-2H26zM26 41v2h12v-2H26z" />
  </svg>
);

export default SvgComponent;
