import React from "react";

const SvgComponent = (props) => (
  <svg width={28} height={32} {...props}>
    <path d="M11 28c7.18 0 13-5.82 13-13h-1c0 6.627-5.373 12-12 12H9v1h2z" />
    <path
      d="M11 27c6.627 0 12-5.373 12-12h-3a9 9 0 01-9 9H9v3h2z"
      fill="#fff"
    />
    <path d="M11 24a9 9 0 009-9h-1a8 8 0 01-8 8H9v1h2zM16 15l5.5-5.5L27 15H16zM18.1 32l9.9-9.9V32h-9.9zM2 19c7.18 0 13-5.82 13-13h-1c0 6.627-5.373 12-12 12H0v1h2z" />
    <path d="M2 18c6.627 0 12-5.373 12-12h-3a9 9 0 01-9 9H0v3h2z" fill="#fff" />
    <path d="M24.042 26.627L1.414 4 0 5.414l22.627 22.628 1.415-1.415z" />
    <path d="M2 15a9 9 0 009-9h-1a8 8 0 01-8 8H0v1h2zM7 6L12.5.5 18 6H7z" />
  </svg>
);

export default SvgComponent;
