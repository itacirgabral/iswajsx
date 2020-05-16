import React from "react";

const SvgComponent = (props) => (
  <svg width={32} height={28} {...props}>
    <path d="M9.9 28H0v-9.9l2.01 2.011v5.878H7.89L9.899 28zM17 27l5.5-5.5L17 16v1.414l4.086 4.086L17 25.586V27z" />
    <path d="M4 11c0 7.18 5.82 13 13 13v-1c-6.627 0-12-5.373-12-12V9H4v2z" />
    <path d="M5 11c0 6.627 5.373 12 12 12v-3a9 9 0 01-9-9V9H5v2z" fill="#fff" />
    <path d="M8 11a9 9 0 009 9v-1a8 8 0 01-8-8V9H8v2zM26 18l5.5-5.5L26 7v1.414l4.086 4.086L26 16.586V18z" />
    <path d="M13 2c0 7.18 5.82 13 13 13v-1c-6.627 0-12-5.373-12-12V0h-1v2z" />
    <path
      d="M14 2c0 6.627 5.373 12 12 12v-3a9 9 0 01-9-9V0h-3v2z"
      fill="#fff"
    />
    <path d="M5.373 24.042L28 1.414 26.586 0 3.958 22.627l1.415 1.415z" />
    <path d="M17 2a9 9 0 009 9v-1a8 8 0 01-8-8V0h-1v2z" />
  </svg>
);

export default SvgComponent;
