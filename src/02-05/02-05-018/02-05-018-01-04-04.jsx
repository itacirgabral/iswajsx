import React from "react";

const SvgComponent = (props) => (
  <svg width={28} height={31} {...props}>
    <path d="M5 12c7.18 0 13 5.82 13 13h-1c0-6.627-5.373-12-12-12H3v-1h2z" />
    <path d="M5.373 26.042L28 3.414 26.586 2 3.958 24.627l1.415 1.415z" />
    <path
      d="M5 13c6.627 0 12 5.373 12 12h-3a9 9 0 00-9-9H3v-3h2z"
      fill="#fff"
    />
    <path d="M5 16a9 9 0 019 9h-1a8 8 0 00-8-8H3v-1h2zM10 25l5.5 5.5L21 25H10zM0 20.1L9.9 30H0v-9.9zM27 16c0-7.18-5.82-13-13-13v1c6.627 0 12 5.373 12 12v2h1v-2z" />
    <path d="M26 16c0-6.627-5.373-12-12-12v3a9 9 0 019 9v2h3v-2z" fill="#fff" />
    <path d="M23 16a9 9 0 00-9-9v1a8 8 0 018 8v2h1v-2zM14 11L8.5 5.5 14 0v11z" />
  </svg>
);

export default SvgComponent;
