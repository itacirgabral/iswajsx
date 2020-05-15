import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M15 32l8 8h-2l-6-6-6 6H7l8-8z" />
    <path d="M2 0v11.75A4.443 4.443 0 014.5 11a4.5 4.5 0 010 9c-.928 0-1.788-.27-2.5-.75v4.5A4.443 4.443 0 014.5 23a4.5 4.5 0 010 9c-.928 0-1.788-.27-2.5-.75V43a4 4 0 004 4c2.761 0 5-3.134 5-7h8a9 9 0 01-9 9H6a6 6 0 01-6-6V0h2zm2.5 13a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm0 12a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" />
  </svg>
);

export default SvgComponent;
