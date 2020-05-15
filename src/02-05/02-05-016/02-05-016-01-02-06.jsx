import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M2 19c7.18 0 13-5.82 13-13h-1c0 6.627-5.373 12-12 12H0v1h2z" />
    <path d="M2 18c6.627 0 12-5.373 12-12h-3a9 9 0 01-9 9H0v3h2z" fill="#fff" />
    <path d="M14.85 17.435L1.413 4 0 5.414l13.435 13.435 1.414-1.414z" />
    <path d="M2 15a9 9 0 009-9h-1a8 8 0 01-8 8H0v1h2zM7 6h11L12.5.5 7 6zm2.408-.994L12.5 1.914l3.07 3.07-6.162.022zM19 13.1V23H9.1l9.9-9.9zm-1.016 2.431l-6.453 6.453h6.453V15.53z" />
    <path
      d="M17.984 15.531v6.453H11.53l6.453-6.453zM9.408 5.006l6.162-.022-3.07-3.07-3.092 3.092z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
