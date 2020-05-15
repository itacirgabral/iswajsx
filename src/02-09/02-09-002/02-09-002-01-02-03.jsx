import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M13 16v14l7-7-7-7zm1 2.438L18.594 23 14 27.563v-9.125z" />
    <path d="M6 0a6 6 0 00-6 6 7.977 7.977 0 003.438 6.563A5.999 5.999 0 000 18a7 7 0 007 7h6v-4H5a3 3 0 01-3-3 4 4 0 014-4h7v-4H6a4 4 0 110-8h8V0H6z" />
    <path d="M14 18.438v9.125L18.594 23 14 18.437z" fill="#fff" />
  </svg>
);

export default SvgComponent;
