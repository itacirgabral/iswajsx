import React from "react";

const SvgComponent = (props) => (
  <svg width={21} height={19} {...props}>
    <path d="M16 0C8.82 0 3 5.82 3 13h1C4 6.373 9.373 1 16 1h2V0h-2z" />
    <path d="M15.435 14.85L2 1.413 3.414 0l13.435 13.435-1.414 1.414z" />
    <path d="M16 1C9.373 1 4 6.373 4 13h3a9 9 0 019-9h2V1h-2z" fill="#fff" />
    <path d="M16 4a9 9 0 00-9 9h1a8 8 0 018-8h2V4h-2zM11 13H0l5.5 5.5L11 13zm-2.408.994L5.5 17.087l-3.07-3.07 6.162-.023zM11.1 19H21V9.1L11.1 19zm2.431-1.016l6.453-6.453v6.453H13.53z" />
    <path
      d="M13.531 17.984h6.453V11.53l-6.453 6.453zM8.592 13.994l-6.162.022 3.07 3.07 3.092-3.092z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
