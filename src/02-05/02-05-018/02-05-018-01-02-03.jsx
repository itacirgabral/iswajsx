import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M7 9v2h6V9H7zm9 0v2h9V9h-9zm12 0v2h10V9H28zM20 14H9l5.5 5.5L20 14zm-2.408.994L14.5 18.086l-3.07-3.07 6.162-.022zM7 17l-7-7 7-7v14zm-1-2.438V5.438L1.437 10 6 14.563z" />
    <path
      d="M6 14.563L1.437 10 6 5.437v9.125zM17.592 14.994l-6.162.022 3.07 3.07 3.092-3.092z"
      fill="#fff"
    />
    <path d="M17 0a3 3 0 00-3 3v8a4 4 0 01-4 4h9a4 4 0 01-4-4V3a2 2 0 014 0v4h1V3a3 3 0 00-3-3zM28 3l4.5 4.5L37 3h-9zm6.563 1L32.5 6.094 30.469 4.03 34.562 4z" />
    <path d="M34.563 4l-4.094.031L32.5 6.094 34.563 4z" fill="#fff" />
    <path d="M29.5 0C27.567 0 26 1.343 26 3v8c0 4.418-1.79 8-4 8h9c-2.21 0-4-3.582-4-8V3c0-1.105 1.12-2 2.5-2s2.5.895 2.5 2h1c0-1.657-1.567-3-3.5-3z" />
  </svg>
);

export default SvgComponent;
