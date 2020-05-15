import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 10h42v4H0v-4zM44 19l5 5 .719-.719L45.437 19l4.282-4.281L49 14l-5 5z" />
    <path d="M48 19.5v-1h6v1h-6zM58 12l-5 5-.719-.719L56.563 12 52.28 7.719 53 7l5 5z" />
    <path d="M54 12.5v-1h-6v1h6zM44 5l5 5 .719-.719L45.437 5 49.72.719 49 0l-5 5z" />
    <path d="M48 5.5v-1h6v1h-6z" />
  </svg>
);

export default SvgComponent;
