import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M4 17C4 9.82 9.82 4 17 4v1C10.373 5 5 10.373 5 17v2H4v-2z" />
    <path d="M5.373 3.958L28 26.586 26.586 28 3.958 5.373l1.415-1.415z" />
    <path d="M5 17c0-6.627 5.373-12 12-12v3a9 9 0 00-9 9v2H5v-2z" fill="#fff" />
    <path d="M8 17a9 9 0 019-9v1a8 8 0 00-8 8v2H8v-2zM17 12l5.5-5.5L17 1v11zM0 9.9L9.9 0H0v9.9zM13 26c0-7.18 5.82-13 13-13v1c-6.627 0-12 5.373-12 12v2h-1v-2z" />
    <path
      d="M14 26c0-6.627 5.373-12 12-12v3a9 9 0 00-9 9v2h-3v-2z"
      fill="#fff"
    />
    <path d="M17 26a9 9 0 019-9v1a8 8 0 00-8 8v2h-1v-2zM26 21l5.5-5.5L26 10v11z" />
  </svg>
);

export default SvgComponent;