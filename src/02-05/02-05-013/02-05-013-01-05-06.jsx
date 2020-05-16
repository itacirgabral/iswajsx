import React from "react";

const SvgComponent = (props) => (
  <svg width={22} height={23} {...props}>
    <path d="M17.757 17.343L1.494 1.08.08 2.494l16.263 16.263 1.414-1.414z" />
    <path d="M4 16C4 9.925 8.925 5 15 5v1C9.477 6 5 10.477 5 16v2H4v-2zM15 11V0l5.5 5.5L15 11zm.994-2.408L19.086 5.5l-3.07-3.07-.022 6.162zM22 13.1V23h-9.9l9.9-9.9zm-1.016 2.431l-6.453 6.453h6.453V15.53z" />
    <path
      d="M20.984 15.531v6.453H14.53l6.453-6.453zM15.994 8.592l.022-6.162 3.07 3.07-3.092 3.092z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
