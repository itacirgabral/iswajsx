import React from "react";

const SvgComponent = (props) => (
  <svg width={32} height={28} {...props}>
    <path d="M0 18.1V28h9.9l-2.011-2.01H2.01V20.11L0 18.101zM1 11l5.5-5.5L12 11h-1.414L6.5 6.914 2.414 11H1z" />
    <path d="M17 24C9.82 24 4 18.18 4 11h1c0 6.627 5.373 12 12 12h2v1h-2z" />
    <path
      d="M17 23c-6.627 0-12-5.373-12-12h3a9 9 0 009 9h2v3h-2z"
      fill="#fff"
    />
    <path d="M17 20a9 9 0 01-9-9h1a8 8 0 008 8h2v1h-2zM26 18l5.5-5.5L26 7v1.414l4.086 4.086L26 16.586V18z" />
    <path d="M13 2c0 7.18 5.82 13 13 13v-1c-6.627 0-12-5.373-12-12V0h-1v2z" />
    <path
      d="M14 2c0 6.627 5.373 12 12 12v-3a9 9 0 01-9-9V0h-3v2z"
      fill="#fff"
    />
    <path d="M17 2a9 9 0 009 9v-1a8 8 0 01-8-8V0h-1v2z" />
    <path d="M3.958 22.627L26.586 0 28 1.414 5.373 24.042l-1.415-1.415z" />
  </svg>
);

export default SvgComponent;
