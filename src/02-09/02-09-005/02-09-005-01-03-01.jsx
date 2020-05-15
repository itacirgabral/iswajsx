import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 9l1.5 1.5v5h5L8 17H0V9z" />
    <path d="M11.5 8c-2.623 0-5 1.062-6.719 2.781l-1.468 1.531 1.374 1.376 1.5-1.5A7.49 7.49 0 0111.5 10a7.49 7.49 0 015.313 2.188L19.593 15 21 13.594l-2.781-2.813A9.472 9.472 0 0011.5 8z" />
    <path d="M9 0h1v21H9V0zM13 0h1v21h-1V0z" />
    <path d="M10 0h3v21h-3V0z" fill="#fff" />
  </svg>
);

export default SvgComponent;
