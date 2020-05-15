import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M7 9v2h6V9H7zm9 0v2h9V9h-9zm12 0v2h10V9H28zM7 17l-7-7 7-7v2.844L2.844 10 7 14.156V17zM21 14l5.5 5.5L32 14h-1.414L26.5 18.086 22.414 14H21z" />
    <path d="M29 0a3 3 0 00-3 3v8a3.898 3.898 0 01-1 2.594V15h3v-1.406A3.898 3.898 0 0127 11V3a2 2 0 014 0v4h1V3a3 3 0 00-3-3zM16 3l4.5 4.5L25 3h-1.406L20.5 6.094 17.406 3H16z" />
    <path d="M17.5 0C15.567 0 14 1.343 14 3v8c0 4.418-1.79 8-4 8h9c-2.21 0-4-3.582-4-8V3c0-1.105 1.12-2 2.5-2s2.5.895 2.5 2h1c0-1.657-1.567-3-3.5-3z" />
  </svg>
);

export default SvgComponent;
