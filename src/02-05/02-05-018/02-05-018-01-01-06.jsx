import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M15 24c7.18 0 13-5.82 13-13h-1c0 6.627-5.373 12-12 12h-2v1h2z" />
    <path
      d="M15 23c6.627 0 12-5.373 12-12h-3a9 9 0 01-9 9h-2v3h2z"
      fill="#fff"
    />
    <path d="M15 20a9 9 0 009-9h-1a8 8 0 01-8 8h-2v1h2zM20 11l5.5-5.5L31 11H20zM22.1 28l9.9-9.9V28h-9.9zM19 2c0 7.18-5.82 13-13 13v-1c6.627 0 12-5.373 12-12V0h1v2z" />
    <path d="M18 2c0 6.627-5.373 12-12 12v-3a9 9 0 009-9V0h3v2z" fill="#fff" />
    <path d="M28.042 22.627L5.414 0 4 1.414l22.627 22.628 1.415-1.415z" />
    <path d="M15 2a9 9 0 01-9 9v-1a8 8 0 008-8V0h1v2zM6 7L.5 12.5 6 18V7z" />
  </svg>
);

export default SvgComponent;