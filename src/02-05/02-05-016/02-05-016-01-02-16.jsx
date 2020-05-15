import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M4 17C4 9.82 9.82 4 17 4v1C10.373 5 5 10.373 5 17v2H4v-2z" />
    <path d="M5.565 4.15L19 17.587 17.586 19 4.151 5.565l1.414-1.414z" />
    <path d="M5 17c0-6.627 5.373-12 12-12v3a9 9 0 00-9 9v2H5v-2z" fill="#fff" />
    <path d="M8 17a9 9 0 019-9v1a8 8 0 00-8 8v2H8v-2zM17 12V1l5.5 5.5L17 12zm.994-2.408L21.086 6.5l-3.07-3.07-.022 6.162zM9.9 0H0v9.9L9.9 0zM7.468 1.016L1.016 7.47V1.016H7.47z" />
    <path
      d="M7.469 1.016H1.016V7.47L7.47 1.016zM17.994 9.592l.022-6.162 3.07 3.07-3.092 3.092z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
