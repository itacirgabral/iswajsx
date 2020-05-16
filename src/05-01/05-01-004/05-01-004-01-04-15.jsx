import React from "react";

const SvgComponent = (props) => (
  <svg width={54} height={30} {...props}>
    <path d="M54 13H12v4h42v-4zM0 25l5 5 .719-.719L1.437 25l4.282-4.281L5 20l-5 5z" />
    <path d="M4 25.5v-1h6v1H4zM0 15l5 5 .719-.719L1.437 15l4.282-4.281L5 10l-5 5z" />
    <path d="M4 15.5v-1h6v1H4zM0 5l5 5 .719-.719L1.437 5 5.72.719 5 0 0 5z" />
    <path d="M4 5.5v-1h6v1H4z" />
  </svg>
);

export default SvgComponent;
