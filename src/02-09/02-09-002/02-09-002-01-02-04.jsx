import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M6 0a6 6 0 00-6 6 8 8 0 008 8h3v4a7 7 0 007 7h7v-4h-9a3 3 0 01-3-3v-8H6a4 4 0 01-4-4c0-2.761 1.79-5 4-5V0zM25 16v14l7-7-7-7zm1 2.438L30.594 23 26 27.563v-9.125z" />
    <path d="M26 18.438v9.125L30.594 23 26 18.437z" fill="#fff" />
  </svg>
);

export default SvgComponent;