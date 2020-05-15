import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 25l-8 8 8 8v-2l-6-6 6-6v-2zM33 0a8 8 0 110 16H22a1 1 0 00-1 1c0 .828.332 1.582.875 2.125l3.938 3.063A7.49 7.49 0 0128 27.5a7.5 7.5 0 01-7.5 7.5H8v-4h12.5c3.038 0 5.5-1.567 5.5-3.5 0-1.519-.63-2.88-1.625-3.875l-3.906-3.094A4.978 4.978 0 0119 17a5 5 0 015-5h10a5 5 0 005-5 6 6 0 00-6-6h-7V0h7z" />
  </svg>
);

export default SvgComponent;
