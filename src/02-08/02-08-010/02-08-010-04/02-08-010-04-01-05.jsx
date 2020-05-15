import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 40l8-8 8 8H0z" />
    <path d="M21 0v11.75a4.443 4.443 0 00-2.5-.75 4.5 4.5 0 000 9c.928 0 1.788-.27 2.5-.75v4.5a4.443 4.443 0 00-2.5-.75 4.5 4.5 0 000 9c.928 0 1.788-.27 2.5-.75V43a4 4 0 01-4 4c-2.761 0-5-3.134-5-7H4a9 9 0 009 9h4a6 6 0 006-6V0h-2zm-2.5 13a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm0 12a2.5 2.5 0 110 5 2.5 2.5 0 010-5z" />
  </svg>
);

export default SvgComponent;