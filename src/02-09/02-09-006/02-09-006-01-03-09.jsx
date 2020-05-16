import React from "react";

const SvgComponent = (props) => (
  <svg width={21} height={29} {...props}>
    <path d="M21 8l-1.5 1.5v5h-5L13 16h8V8z" />
    <path d="M9.5 7c2.623 0 5 1.062 6.719 2.781l1.468 1.531-1.375 1.376-1.5-1.5A7.49 7.49 0 009.5 9a7.49 7.49 0 00-5.313 2.188L1.408 14 0 12.594 2.781 9.78A9.472 9.472 0 019.5 7z" />
    <path d="M12 0h-1v29h1V0zM21 19l-1.5 1.5v5h-5L13 27h8v-8zM8 0H7v29h1V0z" />
    <path d="M9.5 18c2.623 0 5 1.062 6.719 2.781l1.468 1.532-1.375 1.375-1.5-1.5A7.49 7.49 0 009.5 20a7.49 7.49 0 00-5.313 2.188L1.408 25 0 23.594l2.781-2.813A9.472 9.472 0 019.5 18z" />
    <path d="M11 0H8v29h3V0z" fill="#fff" />
  </svg>
);

export default SvgComponent;
