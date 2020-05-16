import React from "react";

const SvgComponent = (props) => (
  <svg width={64} height={14} {...props}>
    <path d="M0 5h42v4H0V5zM44 9l5 5 .719-.719L45.437 9l4.282-4.281L49 4l-5 5z" />
    <path d="M48 9.5v-1h6v1h-6zM64 5l-5 5-.719-.719L62.563 5 58.28.719 59 0l5 5z" />
    <path d="M60 5.5v-1h-6v1h6z" />
  </svg>
);

export default SvgComponent;
