import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M2 4c7.18 0 13 5.82 13 13h-1C14 10.373 8.627 5 2 5H0V4h2z" />
    <path d="M14.85 5.565L1.413 19 0 17.586 13.435 4.151l1.414 1.414z" />
    <path d="M2 5c6.627 0 12 5.373 12 12h-3a9 9 0 00-9-9H0V5h2z" fill="#fff" />
    <path d="M2 8a9 9 0 019 9h-1a8 8 0 00-8-8H0V8h2zM7 17h11l-5.5 5.5L7 17zm2.408.994l3.092 3.092 3.07-3.07-6.162-.022zM19 9.9V0H9.1L19 9.9zm-1.016-2.431L11.53 1.016h6.453V7.47z" />
    <path
      d="M17.984 7.469V1.016H11.53l6.453 6.453zM9.408 17.994l6.162.022-3.07 3.07-3.092-3.092z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
