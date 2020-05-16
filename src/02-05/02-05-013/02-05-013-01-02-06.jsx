import React from "react";

const SvgComponent = (props) => (
  <svg width={22} height={23} {...props}>
    <path d="M17.757 17.343L1.494 1.08.08 2.494l16.263 16.263 1.414-1.414z" />
    <path d="M4 17c6.075 0 11-4.925 11-11h-1c0 5.523-4.477 10-10 10H2v1h2zM9 6h11L14.5.5 9 6zm2.408-.994L14.5 1.914l3.07 3.07-6.162.022zM22 13.1V23h-9.9l9.9-9.9zm-1.016 2.431l-6.453 6.453h6.453V15.53z" />
    <path
      d="M20.984 15.531v6.453H14.53l6.453-6.453zM11.408 5.006l6.162-.022-3.07-3.07-3.092 3.092z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
