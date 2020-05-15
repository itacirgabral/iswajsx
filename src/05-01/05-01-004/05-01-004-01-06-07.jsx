import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M10 5l-5 5-.719-.719L8.563 5 4.28.719 5 0l5 5z" />
    <path d="M6 5.5v-1H0v1h6z" />
  </svg>
);

export default SvgComponent;
