import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M23 8l-8 8h8V8z" />
    <path d="M11.5 7c2.623 0 5 1.062 6.719 2.781l1.468 1.531-1.375 1.376-1.5-1.5A7.49 7.49 0 0011.5 9a7.49 7.49 0 00-5.313 2.188L3.408 14 2 12.594 4.781 9.78A9.472 9.472 0 0111.5 7z" />
    <path d="M14 0h-1v29h1V0zM0 19l8 8H0v-8zM10 0H9v29h1V0z" />
    <path d="M11.5 18c-2.623 0-5 1.062-6.719 2.781l-1.468 1.532 1.374 1.375 1.5-1.5A7.49 7.49 0 0111.5 20a7.49 7.49 0 015.313 2.188L19.593 25 21 23.594l-2.781-2.813A9.472 9.472 0 0011.5 18z" />
    <path d="M13 0h-3v29h3V0z" fill="#fff" />
  </svg>
);

export default SvgComponent;
