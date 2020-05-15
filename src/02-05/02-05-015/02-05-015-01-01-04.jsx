import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M5.615 23.799L24 5.414 22.586 4 4.2 22.385l1.414 1.414zM15 18l5.5 5.5L15 29V18z" />
    <path d="M0 18.1L9.9 28H0v-9.9zM4 13c0 6.075 4.925 11 11 11v-1C9.477 23 5 18.523 5 13v-2H4v2zM17 6L11.5.5 6 6h11z" />
    <path d="M22 17c-6.075 0-11-4.925-11-11h1c0 5.523 4.477 10 10 10h2v1h-2z" />
  </svg>
);

export default SvgComponent;