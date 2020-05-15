import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 11l6.5-6.5L13 11H0z" />
    <path d="M20 0v12c0 2.761-2.686 5-6 5-2.21 0-4-2.686-4-6H3a9 9 0 009 9h2c3.866 0 7-3.582 7-8V0h-1z" />
  </svg>
);

export default SvgComponent;
