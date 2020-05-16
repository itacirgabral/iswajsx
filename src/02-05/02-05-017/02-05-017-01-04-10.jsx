import React from "react";

const SvgComponent = (props) => (
  <svg width={29} height={30} {...props}>
    <path d="M10 5c0 7.18 5.82 13 13 13v-1c-6.627 0-12-5.373-12-12V3h-1v2z" />
    <path
      d="M11 5c0 6.627 5.373 12 12 12v-3a9 9 0 01-9-9V3h-3v2z"
      fill="#fff"
    />
    <path d="M14 5a9 9 0 009 9v-1a8 8 0 01-8-8V3h-1v2zM23 10l5.5 5.5L23 21V10zM18.1 0L28 9.9V0h-9.9zM1 14c0 7.18 5.82 13 13 13v-1C7.373 26 2 20.627 2 14v-2H1v2z" />
    <path
      d="M2 14c0 6.627 5.373 12 12 12v-3a9 9 0 01-9-9v-2H2v2z"
      fill="#fff"
    />
    <path d="M24.042 5.373L1.414 28 0 26.586 22.627 3.958l1.415 1.415z" />
    <path d="M5 14a9 9 0 009 9v-1a8 8 0 01-8-8v-2H5v2zM14 19l5.5 5.5L14 30V19z" />
  </svg>
);

export default SvgComponent;
