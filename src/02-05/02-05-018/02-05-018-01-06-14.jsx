import React from "react";

const SvgComponent = (props) => (
  <svg width={31} height={28} {...props}>
    <path d="M1 18.1V28h9.9l-2.011-2.01H3.01V20.11L1 18.101zM6 7L.5 12.5 6 18v-1.414L1.914 12.5 6 8.414V7z" />
    <path d="M19 23c0-7.18-5.82-13-13-13v1c6.627 0 12 5.373 12 12v2h1v-2z" />
    <path d="M4.958 22.627L27.586 0 29 1.414 6.373 24.042l-1.415-1.415z" />
    <path d="M18 23c0-6.627-5.373-12-12-12v3a9 9 0 019 9v2h3v-2z" fill="#fff" />
    <path d="M15 23a9 9 0 00-9-9v1a8 8 0 018 8v2h1v-2zM31 14l-5.5 5.5L20 14h1.414l4.086 4.086L29.586 14H31zM15 1c7.18 0 13 5.82 13 13h-1c0-6.627-5.373-12-12-12h-2V1h2z" />
    <path
      d="M15 2c6.627 0 12 5.373 12 12h-3a9 9 0 00-9-9h-2V2h2z"
      fill="#fff"
    />
    <path d="M15 5a9 9 0 019 9h-1a8 8 0 00-8-8h-2V5h2z" />
  </svg>
);

export default SvgComponent;
