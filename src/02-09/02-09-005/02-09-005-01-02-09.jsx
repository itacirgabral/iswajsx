import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M21 9v8h-8l8-8zm-1 2.438L15.437 16H20v-4.563z" />
    <path d="M9.5 8c2.623 0 5 1.062 6.719 2.781l1.468 1.531-1.375 1.376-1.5-1.5A7.49 7.49 0 009.5 10a7.49 7.49 0 00-5.313 2.188L1.408 15 0 13.594l2.781-2.813A9.472 9.472 0 019.5 8z" />
    <path d="M12 0h-1v21h1V0zM8 0H7v21h1V0z" />
    <path d="M11 0H8v21h3V0zM20 11.438V16h-4.563L20 11.437z" fill="#fff" />
  </svg>
);

export default SvgComponent;