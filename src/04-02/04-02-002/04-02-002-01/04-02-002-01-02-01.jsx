import React from "react";

const SvgComponent = (props) => (
  <svg width={35} height={35} {...props}>
    <path d="M25 8l5 5-.719.719L24.594 9H18V8h7z" />
    <path d="M23.406 11l4.313 4.281L27 16l-4-4h-4v-1h4.406z" />
    <path d="M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 2C26.06 2 33 8.94 33 17.5 33 26.06 26.06 33 17.5 33 8.94 33 2 26.06 2 17.5 2 8.94 8.94 2 17.5 2z" />
  </svg>
);

export default SvgComponent;
