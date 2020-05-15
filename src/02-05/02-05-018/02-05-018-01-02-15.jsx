import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M38 9v2H17V9h21zM14 9v2H7V9h7zM21 6H10L15.5.5 21 6zm-2.408-.994L15.5 1.914l-3.07 3.07 6.162.022zM7 17l-7-7 7-7v14zm-1-2.438V5.438L1.437 10 6 14.563z" />
    <path
      d="M6 14.563L1.437 10 6 5.437v9.125zM18.592 5.006l-6.162-.022 3.07-3.07 3.092 3.092z"
      fill="#fff"
    />
    <path d="M16 5v10c0 1.105.672 2 1.5 2s1.5-.895 1.5-2v-1h5v1c0 2.21-2.015 4-4.5 4S15 17.21 15 15V5h1zM40 17H29l5.5-5.5L40 17zm-2.408-.994L34.5 12.914l-3.07 3.07 6.162.022z" />
    <path d="M37.592 16.006l-6.162-.022 3.07-3.07 3.092 3.092z" fill="#fff" />
    <path d="M28 1v15a2 2 0 004 0h5c0 2.21-2.239 4-5 4s-5-1.79-5-4V1h1z" />
  </svg>
);

export default SvgComponent;