import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M57 6H15v4h42V6zM7 7v1H0V7h7z" />
    <path d="M8.5 10a2.5 2.5 0 110-5 2.5 2.5 0 110 5zM4 12v1h7v-1H4z" />
    <path d="M2.5 15a2.5 2.5 0 110-5 2.5 2.5 0 110 5zM4 2v1h7V2H4z" />
    <path d="M2.5 5a2.5 2.5 0 110-5 2.5 2.5 0 110 5z" />
  </svg>
);

export default SvgComponent;
