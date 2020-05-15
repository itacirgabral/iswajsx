import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M13 19a6 6 0 100 12 6 6 0 000-12zm0 2a4 4 0 110 8 4 4 0 010-8z" />
    <path
      d="M13 21a4 4 0 100 8 4 4 0 000-8zm0 2a2 2 0 110 4 2 2 0 010-4z"
      fill="#fff"
    />
    <path d="M13 23a2 2 0 100 4 2 2 0 000-4zM.969 26.425L11.575 37.03l1.415-1.414L2.383 25.01.969 26.425zM12.99 14.404L23.596 25.01l1.414-1.414L14.404 12.99l-1.414 1.414zM25 7a6 6 0 100 12 6 6 0 000-12zm0 2a4 4 0 110 8 4 4 0 010-8z" />
    <path
      d="M25 9a4 4 0 100 8 4 4 0 000-8zm0 2a2 2 0 110 4 2 2 0 010-4z"
      fill="#fff"
    />
    <path d="M25 11a2 2 0 100 4 2 2 0 000-4zM25.01 2.383L35.617 12.99l1.414-1.415L26.425.97 25.01 2.383z" />
  </svg>
);

export default SvgComponent;
