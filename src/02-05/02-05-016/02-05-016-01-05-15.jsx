import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M7 9v2h8V9H7zm11 0v2h14V9H18zM17 3h11l-5.5 5.5L17 3zm2.408.994L22.5 7.086l3.07-3.07-6.162-.022zM7 17l-7-7 7-7v14zm-1-2.438V5.438L1.437 10 6 14.563z" />
    <path
      d="M6 14.563L1.437 10 6 5.437v9.125zM19.408 3.994l6.162.022-3.07 3.07-3.092-3.092z"
      fill="#fff"
    />
    <path d="M19.5 0C17.567 0 16 1.343 16 3v8c0 4.418-1.79 8-4 8h9c-2.21 0-4-3.582-4-8V3c0-1.105 1.12-2 2.5-2s2.5.895 2.5 2h1c0-1.657-1.567-3-3.5-3z" />
  </svg>
);

export default SvgComponent;
