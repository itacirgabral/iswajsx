import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M9.9 1H0v9.9l2.01-2.011V3.01H7.89L9.899 1zM21 6L15.5.5 10 6h1.414L15.5 1.914 19.586 6H21z" />
    <path d="M5 19c7.18 0 13-5.82 13-13h-1c0 6.627-5.373 12-12 12H3v1h2z" />
    <path d="M5 18c6.627 0 12-5.373 12-12h-3a9 9 0 01-9 9H3v3h2z" fill="#fff" />
    <path d="M5 15a9 9 0 009-9h-1a8 8 0 01-8 8H3v1h2zM14 31l-5.5-5.5L14 20v1.414L9.914 25.5 14 29.586V31zM27 15c0 7.18-5.82 13-13 13v-1c6.627 0 12-5.373 12-12v-2h1v2z" />
    <path
      d="M26 15c0 6.627-5.373 12-12 12v-3a9 9 0 009-9v-2h3v2z"
      fill="#fff"
    />
    <path d="M5.373 4.958L28 27.586 26.586 29 3.958 6.373l1.415-1.415z" />
    <path d="M23 15a9 9 0 01-9 9v-1a8 8 0 008-8v-2h1v2z" />
  </svg>
);

export default SvgComponent;
