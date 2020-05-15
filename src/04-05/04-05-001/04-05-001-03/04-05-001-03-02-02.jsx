import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 4v2h7V4H8zM4.5 3a2 2 0 00-2 2v1h4V5a2 2 0 00-2-2z" />
    <path d="M4.5 0c-2.21 0-4 2.239-4 5v1h1V5a3 3 0 016 0v1h1V5c0-2.761-1.79-5-4-5z" />
  </svg>
);

export default SvgComponent;
