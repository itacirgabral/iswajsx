import React from "react";

const SvgComponent = (props) => (
  <svg width={38} height={20} {...props}>
    <path d="M31 9v2H0V9h31zM18 14h11l-5.5 5.5L18 14zm2.408.994l3.092 3.092 3.07-3.07-6.162-.022zM31 17l7-7-7-7v14zm1-2.438V5.438L36.563 10 32 14.563z" />
    <path
      d="M32 14.563L36.563 10 32 5.437v9.125zM20.408 14.994l6.162.022-3.07 3.07-3.092-3.092z"
      fill="#fff"
    />
    <path d="M21 0a3 3 0 013 3v8a4 4 0 004 4h-9a4 4 0 004-4V3a2 2 0 00-4 0v4h-1V3a3 3 0 013-3zM6 14h11l-5.5 5.5L6 14zm2.408.994l3.092 3.092 3.07-3.07-6.162-.022z" />
    <path d="M8.408 14.994l6.162.022-3.07 3.07-3.092-3.092z" fill="#fff" />
    <path d="M9 0a3 3 0 013 3v8a4 4 0 004 4H7a4 4 0 004-4V3a2 2 0 00-4 0v4H6V3a3 3 0 013-3z" />
  </svg>
);

export default SvgComponent;
