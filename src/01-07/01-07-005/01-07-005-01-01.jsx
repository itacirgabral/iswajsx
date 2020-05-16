import React from "react";

const SvgComponent = (props) => (
  <svg width={18} height={30} {...props}>
    <path d="M10 15v15h8V15h-8z" />
    <path fill="#fff" d="M11 16h6v13h-6z" />
    <path d="M16 0v15h2V0h-2zM9.5 2L7.781 3l6.938 12H16v-1.719L9.5 2zM0 17v-2h10v2H0z" />
    <path d="M4.625 8.625l-1.406 1.438L8.188 15H11L4.625 8.625zM0 17l10 10v-2.906L2.812 17H0z" />
  </svg>
);

export default SvgComponent;
