import React from "react";

const SvgComponent = (props) => (
  <svg width={55} height={17} {...props}>
    <path d="M55 6H13v4h42V6zM4 9V8h7v1H4z" />
    <path d="M2.5 6a2.5 2.5 0 110 5 2.5 2.5 0 110-5zM4 3V2h7v1H4z" />
    <path d="M2.5 0a2.5 2.5 0 110 5 2.5 2.5 0 110-5zM4 15v-1h7v1H4z" />
    <path d="M2.5 12a2.5 2.5 0 110 5 2.5 2.5 0 110-5z" />
  </svg>
);

export default SvgComponent;
