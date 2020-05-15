import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 10h42v4H0v-4zM58 19l-5 5-.719-.719L56.563 19l-4.282-4.281L53 14l5 5z" />
    <path d="M54 19.5v-1h-6v1h6zM44 12l5 5 .719-.719L45.437 12l4.282-4.281L49 7l-5 5z" />
    <path d="M48 12.5v-1h6v1h-6zM58 5l-5 5-.719-.719L56.563 5 52.28.719 53 0l5 5z" />
    <path d="M54 5.5v-1h-6v1h6z" />
  </svg>
);

export default SvgComponent;
