import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M10 25c0-7.18 5.82-13 13-13v1c-6.627 0-12 5.373-12 12v2h-1v-2z" />
    <path d="M24.042 24.627L1.414 2 0 3.414l22.627 22.628 1.415-1.415z" />
    <path
      d="M11 25c0-6.627 5.373-12 12-12v3a9 9 0 00-9 9v2h-3v-2z"
      fill="#fff"
    />
    <path d="M14 25a9 9 0 019-9v1a8 8 0 00-8 8v2h-1v-2zM23 20l5.5-5.5L23 9v11zM18.1 30l9.9-9.9V30h-9.9zM1 16C1 8.82 6.82 3 14 3v1C7.373 4 2 9.373 2 16v2H1v-2z" />
    <path d="M2 16C2 9.373 7.373 4 14 4v3a9 9 0 00-9 9v2H2v-2z" fill="#fff" />
    <path d="M5 16a9 9 0 019-9v1a8 8 0 00-8 8v2H5v-2zM14 11l5.5-5.5L14 0v11z" />
  </svg>
);

export default SvgComponent;
