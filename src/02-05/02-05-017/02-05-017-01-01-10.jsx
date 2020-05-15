import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M11 4c7.18 0 13 5.82 13 13h-1c0-6.627-5.373-12-12-12H9V4h2z" />
    <path d="M24.042 5.373L1.414 28 0 26.586 22.627 3.958l1.415 1.415z" />
    <path d="M11 5c6.627 0 12 5.373 12 12h-3a9 9 0 00-9-9H9V5h2z" fill="#fff" />
    <path d="M11 8a9 9 0 019 9h-1a8 8 0 00-8-8H9V8h2zM16 17l5.5 5.5L27 17H16zM18.1 0L28 9.9V0h-9.9zM2 13c7.18 0 13 5.82 13 13h-1c0-6.627-5.373-12-12-12H0v-1h2z" />
    <path
      d="M2 14c6.627 0 12 5.373 12 12h-3a9 9 0 00-9-9H0v-3h2z"
      fill="#fff"
    />
    <path d="M2 17a9 9 0 019 9h-1a8 8 0 00-8-8H0v-1h2zM7 26l5.5 5.5L18 26H7z" />
  </svg>
);

export default SvgComponent;