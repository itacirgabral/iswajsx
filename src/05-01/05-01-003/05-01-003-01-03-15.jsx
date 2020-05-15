import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M62 6H20v4h42V6zM0 11l5 5 .719-.719L1.437 11 5.72 6.719 5 6l-5 5z" />
    <path d="M4 13v-1h6v1H4zM4 10V9h6v1H4zM18 5l-5 5-.719-.719L16.562 5 12.282.719 13 0l5 5z" />
    <path d="M14 7V6H8v1h6zM14 4V3H8v1h6z" />
  </svg>
);

export default SvgComponent;