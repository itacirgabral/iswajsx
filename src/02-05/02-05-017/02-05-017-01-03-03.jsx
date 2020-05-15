import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M7 9v2h31V9H7zM7 17l-7-7 7-7v2.844L2.844 10 7 14.156V17zM9 14l5.5 5.5L20 14h-1.414L14.5 18.086 10.414 14H9z" />
    <path d="M17 0a3 3 0 00-3 3v8a3.898 3.898 0 01-1 2.594V15h3v-1.406A3.898 3.898 0 0115 11V3a2 2 0 014 0v4h1V3a3 3 0 00-3-3zM21 14l5.5 5.5L32 14h-1.414L26.5 18.086 22.414 14H21z" />
    <path d="M29 0a3 3 0 00-3 3v8a3.898 3.898 0 01-1 2.594V15h3v-1.406A3.898 3.898 0 0127 11V3a2 2 0 014 0v4h1V3a3 3 0 00-3-3z" />
  </svg>
);

export default SvgComponent;