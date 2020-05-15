import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M10 15v15h8V15h-8zM16 0v15h2V0h-2zM9.5 2L7.781 3l6.938 12H16v-1.719L9.5 2zM0 17v-2h10v2H0z" />
    <path d="M4.625 8.625l-1.406 1.438L8.188 15H11L4.625 8.625zM23.656 18.5L18 24.188V27l7.063-7.063-1.407-1.437z" />
  </svg>
);

export default SvgComponent;
