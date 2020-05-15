import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M64 5H22v4h42V5zM0 9l5 5 .719-.719L1.437 9 5.72 4.719 5 4 0 9z" />
    <path d="M4 9.5v-1h6v1H4zM20 5l-5 5-.719-.719L18.562 5 14.282.719 15 0l5 5z" />
    <path d="M16 5.5v-1h-6v1h6z" />
  </svg>
);

export default SvgComponent;
