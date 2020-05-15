import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 0L.5 7.5 8 15V0z" />
    <path d="M8 4v1.5h1.5c7.18 0 13 5.82 13 13s-5.82 13-13 13H3V33h6.5C17.508 33 24 26.508 24 18.5S17.508 4 9.5 4H8z" />
    <path
      d="M8 5.5v4h1.5a9 9 0 110 18H3v4h6.5c7.18 0 13-5.82 13-13s-5.82-13-13-13H8z"
      fill="#fff"
    />
    <path d="M8 9.5V11h1.5a7.5 7.5 0 110 15H3v1.5h6.5a9 9 0 100-18H8z" />
  </svg>
);

export default SvgComponent;
