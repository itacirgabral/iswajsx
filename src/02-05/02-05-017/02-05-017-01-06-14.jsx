import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M1 20.1V30h9.9l-2.011-2.01H3.01V22.11L1 20.101zM6 9L.5 14.5 6 20v-1.414L1.914 14.5 6 10.414V9z" />
    <path d="M19 25c0-7.18-5.82-13-13-13v1c6.627 0 12 5.373 12 12v2h1v-2z" />
    <path d="M4.958 24.627L27.586 2 29 3.414 6.373 26.042l-1.415-1.415z" />
    <path d="M18 25c0-6.627-5.373-12-12-12v3a9 9 0 019 9v2h3v-2z" fill="#fff" />
    <path d="M15 25a9 9 0 00-9-9v1a8 8 0 018 8v2h1v-2zM15 0L9.5 5.5 15 11V9.586L10.914 5.5 15 1.414V0zM28 16c0-7.18-5.82-13-13-13v1c6.627 0 12 5.373 12 12v2h1v-2z" />
    <path d="M27 16c0-6.627-5.373-12-12-12v3a9 9 0 019 9v2h3v-2z" fill="#fff" />
    <path d="M24 16a9 9 0 00-9-9v1a8 8 0 018 8v2h1v-2z" />
  </svg>
);

export default SvgComponent;