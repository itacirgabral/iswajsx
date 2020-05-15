import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M5.657 17.757L21.92 1.494 20.506.08 4.243 16.343l1.414 1.414z" />
    <path d="M6 4c0 6.075 4.925 11 11 11v-1C11.477 14 7 9.523 7 4V2H6v2zM17 9v11l5.5-5.5L17 9zm.994 2.408l3.092 3.092-3.07 3.07-.022-6.162zM9.9 22H0v-9.9L9.9 22zm-2.431-1.016L1.016 14.53v6.453H7.47z" />
    <path
      d="M7.469 20.984H1.016V14.53l6.453 6.453zM17.994 11.408l.022 6.162 3.07-3.07-3.092-3.092z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;