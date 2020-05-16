import React from "react";

const SvgComponent = (props) => (
  <svg width={28} height={31} {...props}>
    <path d="M23 19c-7.18 0-13-5.82-13-13h1c0 6.627 5.373 12 12 12h2v1h-2z" />
    <path
      d="M23 18c-6.627 0-12-5.373-12-12h3a9 9 0 009 9h2v3h-2z"
      fill="#fff"
    />
    <path d="M23 15a9 9 0 01-9-9h1a8 8 0 008 8h2v1h-2zM18 6L12.5.5 7 6h11zM28 10.9L18.1 1H28v9.9zM1 15c0 7.18 5.82 13 13 13v-1C7.373 27 2 21.627 2 15v-2H1v2z" />
    <path
      d="M2 15c0 6.627 5.373 12 12 12v-3a9 9 0 01-9-9v-2H2v2z"
      fill="#fff"
    />
    <path d="M22.627 4.958L0 27.586 1.414 29 24.042 6.373l-1.415-1.415z" />
    <path d="M5 15a9 9 0 009 9v-1a8 8 0 01-8-8v-2H5v2zM14 20l5.5 5.5L14 31V20z" />
  </svg>
);

export default SvgComponent;
