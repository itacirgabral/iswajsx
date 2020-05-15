import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 16C0 8.82 5.82 3 13 3v1C6.373 4 1 9.373 1 16v2H0v-2z" />
    <path d="M14.85 15.435L1.413 2 0 3.414l13.435 13.435 1.414-1.414z" />
    <path d="M1 16C1 9.373 6.373 4 13 4v3a9 9 0 00-9 9v2H1v-2z" fill="#fff" />
    <path d="M4 16a9 9 0 019-9v1a8 8 0 00-8 8v2H4v-2zM13 11V0l5.5 5.5L13 11zm.994-2.408L17.087 5.5l-3.07-3.07-.023 6.162zM19 11.1V21H9.1l9.9-9.9zm-1.016 2.431l-6.453 6.453h6.453V13.53z" />
    <path
      d="M17.984 13.531v6.453H11.53l6.453-6.453zM13.994 8.592l.022-6.162 3.07 3.07-3.092 3.092z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
