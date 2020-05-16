import React from "react";

const SvgComponent = (props) => (
  <svg width={23} height={22} {...props}>
    <path d="M5.657 17.757L21.92 1.494 20.506.08 4.243 16.343l1.414 1.414z" />
    <path d="M7 4c6.075 0 11 4.925 11 11h-1C17 9.477 12.523 5 7 5H5V4h2zM12 15h11l-5.5 5.5L12 15zm2.408.994l3.092 3.092 3.07-3.07-6.162-.022zM9.9 22H0v-9.9L9.9 22zm-2.431-1.016L1.016 14.53v6.453H7.47z" />
    <path
      d="M7.469 20.984H1.016V14.53l6.453 6.453zM14.408 15.994l6.162.022-3.07 3.07-3.092-3.092z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
