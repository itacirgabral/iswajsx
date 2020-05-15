import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 13h42v4H0v-4zM44 25l5 5 .719-.719L45.437 25l4.282-4.281L49 20l-5 5z" />
    <path d="M48 25.5v-1h6v1h-6zM44 15l5 5 .719-.719L45.437 15l4.282-4.281L49 10l-5 5z" />
    <path d="M48 15.5v-1h6v1h-6zM44 5l5 5 .719-.719L45.437 5 49.72.719 49 0l-5 5z" />
    <path d="M48 5.5v-1h6v1h-6z" />
  </svg>
);

export default SvgComponent;
