import React from "react";

const SvgComponent = (props) => (
  <svg width={21} height={19} {...props}>
    <path d="M5 19c7.18 0 13-5.82 13-13h-1c0 6.627-5.373 12-12 12H3v1h2z" />
    <path d="M5 18c6.627 0 12-5.373 12-12h-3a9 9 0 01-9 9H3v3h2z" fill="#fff" />
    <path d="M5.565 4.151L19 17.586 17.586 19 4.151 5.565l1.414-1.414z" />
    <path d="M5 15a9 9 0 009-9h-1a8 8 0 01-8 8H3v1h2zM10 6h11L15.5.5 10 6zm2.408-.994L15.5 1.914l3.07 3.07-6.162.022zM9.9 0H0v9.9L9.9 0zM7.468 1.016L1.016 7.47V1.016H7.47z" />
    <path
      d="M7.469 1.016H1.016V7.47L7.47 1.016zM12.408 5.006l6.162-.022-3.07-3.07-3.092 3.092z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
