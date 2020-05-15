import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M16 19C8.82 19 3 13.18 3 6h1c0 6.627 5.373 12 12 12h2v1h-2z" />
    <path d="M16 18C9.373 18 4 12.627 4 6h3a9 9 0 009 9h2v3h-2z" fill="#fff" />
    <path d="M15.435 4.151L2 17.586 3.414 19 16.849 5.565l-1.414-1.414z" />
    <path d="M16 15a9 9 0 01-9-9h1a8 8 0 008 8h2v1h-2zM11 6H0L5.5.5 11 6zm-2.408-.994L5.5 1.914l-3.07 3.07 6.162.022zM11.1 0H21v9.9L11.1 0zm2.431 1.016l6.453 6.453V1.016H13.53z" />
    <path
      d="M13.531 1.016h6.453V7.47L13.53 1.016zM8.592 5.006L2.43 4.984l3.07-3.07 3.092 3.092z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;