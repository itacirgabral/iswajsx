import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 5h42v4H0V5zM64 9l-5 5-.719-.719L62.563 9 58.28 4.719 59 4l5 5z" />
    <path d="M60 9.5v-1h-6v1h6zM44 5l5 5 .719-.719L45.437 5 49.72.719 49 0l-5 5z" />
    <path d="M48 5.5v-1h6v1h-6z" />
  </svg>
);

export default SvgComponent;
