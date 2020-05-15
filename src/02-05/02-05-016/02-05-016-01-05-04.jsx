import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M5 0c7.18 0 13 5.82 13 13h-1C17 6.373 11.627 1 5 1H3V0h2z" />
    <path d="M5.565 14.85L19 1.413 17.586 0 4.151 13.435l1.414 1.414z" />
    <path d="M5 1c6.627 0 12 5.373 12 12h-3a9 9 0 00-9-9H3V1h2z" fill="#fff" />
    <path d="M5 4a9 9 0 019 9h-1a8 8 0 00-8-8H3V4h2zM10 13h11l-5.5 5.5L10 13zm2.408.994l3.092 3.093 3.07-3.07-6.162-.023zM9.9 19H0V9.1L9.9 19zm-2.431-1.016L1.016 11.53v6.453H7.47z" />
    <path
      d="M7.469 17.984H1.016V11.53l6.453 6.453zM12.408 13.994l6.162.022-3.07 3.07-3.092-3.092z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
