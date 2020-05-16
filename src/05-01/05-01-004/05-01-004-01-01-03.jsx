import React from "react";

const SvgComponent = (props) => (
  <svg width={54} height={10} {...props}>
    <path d="M0 3h42v4H0V3zM44 5l5 5 .719-.719L45.437 5 49.72.719 49 0l-5 5z" />
    <path d="M48 5.5v-1h6v1h-6z" />
  </svg>
);

export default SvgComponent;
