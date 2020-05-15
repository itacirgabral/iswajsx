import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M5.615 23.799L24 5.414 22.586 4 4.2 22.385l1.414 1.414z" />
    <path d="M4 13c0 6.075 4.925 11 11 11v-1C9.477 23 5 18.523 5 13v-2H4v2zM15 18v11l5.5-5.5L15 18zm.994 2.408l3.092 3.092-3.07 3.07-.022-6.162zM9.9 28H0v-9.9L9.9 28zm-2.431-1.016L1.016 20.53v6.453H7.47z" />
    <path
      d="M7.469 26.984H1.016V20.53l6.453 6.453zM15.994 20.408l.022 6.162 3.07-3.07-3.092-3.092z"
      fill="#fff"
    />
    <path d="M22 17c-6.075 0-11-4.925-11-11h1c0 5.523 4.477 10 10 10h2v1h-2zM17 6H6L11.5.5 17 6zm-2.408-.994L11.5 1.914l-3.07 3.07 6.162.022z" />
    <path d="M14.592 5.006L8.43 4.984l3.07-3.07 3.092 3.092z" fill="#fff" />
  </svg>
);

export default SvgComponent;
