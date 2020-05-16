import React from "react";

const SvgComponent = (props) => (
  <svg width={29} height={30} {...props}>
    <path d="M1 9.9V0h9.9L8.888 2.01H3.01V7.89L1 9.899zM6 21L.5 15.5 6 10v1.414L1.914 15.5 6 19.586V21z" />
    <path d="M19 5c0 7.18-5.82 13-13 13v-1c6.627 0 12-5.373 12-12V3h1v2z" />
    <path d="M18 5c0 6.627-5.373 12-12 12v-3a9 9 0 009-9V3h3v2z" fill="#fff" />
    <path d="M15 5a9 9 0 01-9 9v-1a8 8 0 008-8V3h1v2zM15 30l-5.5-5.5L15 19v1.414L10.914 24.5 15 28.586V30zM28 14c0 7.18-5.82 13-13 13v-1c6.627 0 12-5.373 12-12v-2h1v2z" />
    <path
      d="M27 14c0 6.627-5.373 12-12 12v-3a9 9 0 009-9v-2h3v2z"
      fill="#fff"
    />
    <path d="M4.958 5.373L27.586 28 29 26.586 6.373 3.958 4.958 5.373z" />
    <path d="M24 14a9 9 0 01-9 9v-1a8 8 0 008-8v-2h1v2z" />
  </svg>
);

export default SvgComponent;
