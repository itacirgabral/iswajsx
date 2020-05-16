import React from "react";

const SvgComponent = (props) => (
  <svg width={54} height={20} {...props}>
    <path d="M54 8H12v4h42V8zM10 15l-5 5-.719-.719L8.563 15 4.28 10.719 5 10l5 5z" />
    <path d="M6 15.5v-1H0v1h6zM10 5l-5 5-.719-.719L8.563 5 4.28.719 5 0l5 5z" />
    <path d="M6 5.5v-1H0v1h6z" />
  </svg>
);

export default SvgComponent;
