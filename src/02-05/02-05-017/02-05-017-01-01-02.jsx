import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M17 4C9.82 4 4 9.82 4 17h1c0-6.627 5.373-12 12-12h2V4h-2z" />
    <path d="M3.958 5.373L26.586 28 28 26.586 5.373 3.958 3.958 5.373z" />
    <path d="M17 5C10.373 5 5 10.373 5 17h3a9 9 0 019-9h2V5h-2z" fill="#fff" />
    <path d="M17 8a9 9 0 00-9 9h1a8 8 0 018-8h2V8h-2zM12 17l-5.5 5.5L1 17h11zM9.9 0L0 9.9V0h9.9zM26 13c-7.18 0-13 5.82-13 13h1c0-6.627 5.373-12 12-12h2v-1h-2z" />
    <path
      d="M26 14c-6.627 0-12 5.373-12 12h3a9 9 0 019-9h2v-3h-2z"
      fill="#fff"
    />
    <path d="M26 17a9 9 0 00-9 9h1a8 8 0 018-8h2v-1h-2zM21 26l-5.5 5.5L10 26h11z" />
  </svg>
);

export default SvgComponent;
