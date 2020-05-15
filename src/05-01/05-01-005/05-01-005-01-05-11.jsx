import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M57 5H15v4h42V5zM4 7v1h7V7H4z" />
    <path d="M2.5 10a2.5 2.5 0 110-5 2.5 2.5 0 110 5zM7 12v1H0v-1h7z" />
    <path d="M8.5 15a2.5 2.5 0 110-5 2.5 2.5 0 110 5zM7 2v1H0V2h7z" />
    <path d="M8.5 5a2.5 2.5 0 110-5 2.5 2.5 0 110 5z" />
  </svg>
);

export default SvgComponent;
