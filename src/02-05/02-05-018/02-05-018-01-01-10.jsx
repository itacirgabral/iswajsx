import React from "react";

const SvgComponent = (props) => (
  <svg width={32} height={28} {...props}>
    <path d="M15 4c7.18 0 13 5.82 13 13h-1c0-6.627-5.373-12-12-12h-2V4h2z" />
    <path d="M28.042 5.373L5.414 28 4 26.586 26.627 3.958l1.415 1.415z" />
    <path
      d="M15 5c6.627 0 12 5.373 12 12h-3a9 9 0 00-9-9h-2V5h2z"
      fill="#fff"
    />
    <path d="M15 8a9 9 0 019 9h-1a8 8 0 00-8-8h-2V8h2zM20 17l5.5 5.5L31 17H20zM22.1 0L32 9.9V0h-9.9zM19 26c0-7.18-5.82-13-13-13v1c6.627 0 12 5.373 12 12v2h1v-2z" />
    <path d="M18 26c0-6.627-5.373-12-12-12v3a9 9 0 019 9v2h3v-2z" fill="#fff" />
    <path d="M15 26a9 9 0 00-9-9v1a8 8 0 018 8v2h1v-2zM6 21L.5 15.5 6 10v11z" />
  </svg>
);

export default SvgComponent;
