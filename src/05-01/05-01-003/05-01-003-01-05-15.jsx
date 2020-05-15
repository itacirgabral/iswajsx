import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M56 11H14v4h42v-4zM0 21l5 5 .719-.719L1.437 21l4.282-4.281L5 16l-5 5z" />
    <path d="M4 23v-1h6v1H4zM4 20v-1h6v1H4zM12 13l-5 5-.719-.719L10.563 13 6.28 8.719 7 8l5 5z" />
    <path d="M8 15v-1H2v1h6zM8 12v-1H2v1h6zM0 5l5 5 .719-.719L1.437 5 5.72.719 5 0 0 5z" />
    <path d="M4 7V6h6v1H4zM4 4V3h6v1H4z" />
  </svg>
);

export default SvgComponent;
