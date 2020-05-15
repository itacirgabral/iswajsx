import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M4 15c0 7.18 5.82 13 13 13v-1c-6.627 0-12-5.373-12-12v-2H4v2z" />
    <path
      d="M5 15c0 6.627 5.373 12 12 12v-3a9 9 0 01-9-9v-2H5v2z"
      fill="#fff"
    />
    <path d="M8 15a9 9 0 009 9v-1a8 8 0 01-8-8v-2H8v2zM17 20l5.5 5.5L17 31V20zM0 22.1L9.9 32H0v-9.9zM26 19c-7.18 0-13-5.82-13-13h1c0 6.627 5.373 12 12 12h2v1h-2z" />
    <path
      d="M26 18c-6.627 0-12-5.373-12-12h3a9 9 0 009 9h2v3h-2z"
      fill="#fff"
    />
    <path d="M26 15a9 9 0 01-9-9h1a8 8 0 008 8h2v1h-2z" />
    <path d="M5.373 28.042L28 5.414 26.586 4 3.958 26.627l1.415 1.415zM21 6L15.5.5 10 6h11z" />
  </svg>
);

export default SvgComponent;
