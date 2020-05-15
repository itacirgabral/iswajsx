import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 8h42v4H0V8zM44 15l5 5 .719-.719L45.437 15l4.282-4.281L49 10l-5 5z" />
    <path d="M48 15.5v-1h6v1h-6zM44 5l5 5 .719-.719L45.437 5 49.72.719 49 0l-5 5z" />
    <path d="M48 5.5v-1h6v1h-6z" />
  </svg>
);

export default SvgComponent;
