import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M24 15c0 7.18-5.82 13-13 13v-1c6.627 0 12-5.373 12-12v-2h1v2z" />
    <path
      d="M23 15c0 6.627-5.373 12-12 12v-3a9 9 0 009-9v-2h3v2z"
      fill="#fff"
    />
    <path d="M20 15a9 9 0 01-9 9v-1a8 8 0 008-8v-2h1v2zM11 20l-5.5 5.5L11 31V20zM28 22.1L18.1 32H28v-9.9zM2 19c7.18 0 13-5.82 13-13h-1c0 6.627-5.373 12-12 12H0v1h2z" />
    <path d="M2 18c6.627 0 12-5.373 12-12h-3a9 9 0 01-9 9H0v3h2z" fill="#fff" />
    <path d="M2 15a9 9 0 009-9h-1a8 8 0 01-8 8H0v1h2z" />
    <path d="M22.627 28.042L0 5.414 1.414 4l22.628 22.627-1.415 1.415zM7 6L12.5.5 18 6H7z" />
  </svg>
);

export default SvgComponent;