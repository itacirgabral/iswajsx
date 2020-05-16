import React from "react";

const SvgComponent = (props) => (
  <svg width={38} height={20} {...props}>
    <path d="M31 9v2h-3V9h3zm-6 0v2H12V9h13zM9 9v2H0V9h9zM5 6h11L10.5.5 5 6zm2.408-.994L10.5 1.914l3.07 3.07-6.162.022zM31 17l7-7-7-7v14zm1-2.438V5.438L36.563 10 32 14.563z" />
    <path
      d="M32 14.563L36.563 10 32 5.437v9.125zM7.408 5.006l6.162-.022-3.07-3.07-3.092 3.092z"
      fill="#fff"
    />
    <path d="M10 5v10c0 1.105-.672 2-1.5 2S7 16.105 7 15v-1H2v1c0 2.21 2.015 4 4.5 4s4.5-1.79 4.5-4V5h-1zM14 17h11l-5.5-5.5L14 17zm2.408-.994l3.092-3.092 3.07 3.07-6.162.022z" />
    <path d="M16.408 16.006l6.162-.022-3.07-3.07-3.092 3.092z" fill="#fff" />
    <path d="M26 1v15a2 2 0 01-4 0h-5c0 2.21 2.239 4 5 4s5-1.79 5-4V1h-1z" />
  </svg>
);

export default SvgComponent;
