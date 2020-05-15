import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M19 16C19 8.82 13.18 3 6 3v1c6.627 0 12 5.373 12 12v2h1v-2z" />
    <path d="M4.151 15.435L17.586 2 19 3.414 5.565 16.849l-1.414-1.414z" />
    <path d="M18 16C18 9.373 12.627 4 6 4v3a9 9 0 019 9v2h3v-2z" fill="#fff" />
    <path d="M15 16a9 9 0 00-9-9v1a8 8 0 018 8v2h1v-2zM6 11V0L.5 5.5 6 11zm-.994-2.408L1.914 5.5l3.07-3.07.022 6.162zM0 11.1V21h9.9L0 11.1zm1.016 2.431l6.453 6.453H1.016V13.53z" />
    <path
      d="M1.016 13.531v6.453H7.47L1.016 13.53zM5.006 8.592L4.984 2.43 1.914 5.5l3.092 3.092z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
