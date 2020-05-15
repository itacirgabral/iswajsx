import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M19 17C19 9.82 13.18 4 6 4v1c6.627 0 12 5.373 12 12v2h1v-2z" />
    <path d="M17.435 4.15L4 17.587 5.414 19 18.849 5.565l-1.414-1.414z" />
    <path d="M18 17c0-6.627-5.373-12-12-12v3a9 9 0 019 9v2h3v-2z" fill="#fff" />
    <path d="M15 17a9 9 0 00-9-9v1a8 8 0 018 8v2h1v-2zM6 12V1L.5 6.5 6 12zm-.994-2.408L1.914 6.5l3.07-3.07.022 6.162zM13.1 0H23v9.9L13.1 0zm2.431 1.016l6.453 6.453V1.016H15.53z" />
    <path
      d="M15.531 1.016h6.453V7.47L15.53 1.016zM5.006 9.592L4.984 3.43 1.914 6.5l3.092 3.092z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
