import React from "react";

const SvgComponent = (props) => (
  <svg width={35} height={14} {...props}>
    <path d="M0 0v9.9L9.9 0H0zm1.016 1.016L7.491.994 1.016 7.47V1.016z" />
    <path d="M4.243 5.657l5.656 5.657a3 3 0 004.243 0 2.98 2.98 0 00.862-1.967l2.674 2.674a3 3 0 004.242 0 2.98 2.98 0 00.862-1.967l2.674 2.674a4 4 0 005.657 0l.707-.707c2.733-2.734 3.05-6.85.707-9.193l-4.243 4.243c1.562 1.562 2.196 3.462 1.414 4.243a2 2 0 01-2.828 0l-6.055-6.055V9.9c0 .256-.114.512-.309.708a1 1 0 01-1.414 0l-6.055-6.055v4.64c0 .256-.114.512-.31.707a1 1 0 01-1.413 0L5.657 4.243 4.243 5.657z" />
    <path d="M1.016 1.016V7.47L7.491.994l-6.475.022z" fill="#fff" />
  </svg>
);

export default SvgComponent;
