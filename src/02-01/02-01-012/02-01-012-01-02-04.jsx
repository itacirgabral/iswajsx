import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M13 7a6 6 0 100 12 6 6 0 000-12zm0 2a4 4 0 110 8 4 4 0 010-8z" />
    <path
      d="M13 9a4 4 0 100 8 4 4 0 000-8zm0 2a2 2 0 110 4 2 2 0 010-4z"
      fill="#fff"
    />
    <path d="M13 11a2 2 0 100 4 2 2 0 000-4zM11.575.969L.97 11.575l1.414 1.415L12.99 2.383 11.575.969zM23.596 12.99L12.99 23.596l1.414 1.414L25.01 14.404l-1.414-1.414zM25 19a6 6 0 100 12 6 6 0 000-12zm0 2a4 4 0 110 8 4 4 0 010-8z" />
    <path
      d="M25 21a4 4 0 100 8 4 4 0 000-8zm0 2a2 2 0 110 4 2 2 0 010-4z"
      fill="#fff"
    />
    <path d="M25 23a2 2 0 100 4 2 2 0 000-4zM35.617 25.01L25.01 35.617l1.415 1.414L37.03 26.425l-1.414-1.415z" />
  </svg>
);

export default SvgComponent;
