import React from "react";

const SvgComponent = (props) => (
  <svg width={28} height={32} {...props}>
    <path d="M24 17c0-7.18-5.82-13-13-13v1c6.627 0 12 5.373 12 12v2h1v-2z" />
    <path d="M22.627 3.958L0 26.586 1.414 28 24.042 5.373l-1.415-1.415z" />
    <path d="M23 17c0-6.627-5.373-12-12-12v3a9 9 0 019 9v2h3v-2z" fill="#fff" />
    <path d="M20 17a9 9 0 00-9-9v1a8 8 0 018 8v2h1v-2zM11 12L5.5 6.5 11 1v11zM28 9.9L18.1 0H28v9.9zM2 13c7.18 0 13 5.82 13 13h-1c0-6.627-5.373-12-12-12H0v-1h2z" />
    <path
      d="M2 14c6.627 0 12 5.373 12 12h-3a9 9 0 00-9-9H0v-3h2z"
      fill="#fff"
    />
    <path d="M2 17a9 9 0 019 9h-1a8 8 0 00-8-8H0v-1h2zM7 26l5.5 5.5L18 26H7z" />
  </svg>
);

export default SvgComponent;
