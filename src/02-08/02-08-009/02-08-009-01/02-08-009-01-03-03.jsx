import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 0v9.9l1.414-1.415v-7.07h7.071L9.9 0H0z" />
    <path d="M4.243 5.657l5.656 5.657a3 3 0 004.243 0 2.98 2.98 0 00.862-1.967l3.38 3.38a4 4 0 005.658 0l.707-.706c2.733-2.734 3.05-6.85.707-9.193l-4.243 4.243c1.562 1.562 2.195 3.462 1.414 4.243a2 2 0 01-2.828 0l-6.762-6.762v4.64c0 .256-.114.512-.31.707a1 1 0 01-1.413 0L5.657 4.243 4.243 5.657z" />
  </svg>
);

export default SvgComponent;
