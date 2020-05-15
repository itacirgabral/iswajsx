import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 6h42v4H0V6zM62 11l-5 5-.719-.719L60.563 11 56.28 6.719 57 6l5 5z" />
    <path d="M58 13v-1h-6v1h6zM58 10V9h-6v1h6zM44 5l5 5 .719-.719L45.437 5 49.72.719 49 0l-5 5z" />
    <path d="M48 7V6h6v1h-6zM48 4V3h6v1h-6z" />
  </svg>
);

export default SvgComponent;