import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M31 9v2h-6V9h6zm-9 0v2h-9V9h9zM10 9v2H0V9h10zM6 14h11l-5.5 5.5L6 14zm2.408.994l3.092 3.092 3.07-3.07-6.162-.022zM31 17l7-7-7-7v14zm1-2.438V5.438L36.563 10 32 14.563z" />
    <path
      d="M32 14.563L36.563 10 32 5.437v9.125zM8.408 14.994l6.162.022-3.07 3.07-3.092-3.092z"
      fill="#fff"
    />
    <path d="M9 0a3 3 0 013 3v8a4 4 0 004 4H7a4 4 0 004-4V3a2 2 0 00-4 0v4H6V3a3 3 0 013-3zM22 3l-4.5 4.5L13 3h9zm-6.563 1L17.5 6.094l2.031-2.063L15.438 4z" />
    <path d="M15.438 4l4.093.031L17.5 6.094 15.437 4z" fill="#fff" />
    <path d="M20.5 0C22.433 0 24 1.343 24 3v8c0 4.418 1.79 8 4 8h-9c2.21 0 4-3.582 4-8V3c0-1.105-1.12-2-2.5-2S18 1.895 18 3h-1c0-1.657 1.567-3 3.5-3z" />
  </svg>
);

export default SvgComponent;
