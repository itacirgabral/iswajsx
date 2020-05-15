import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 8v8h8L0 8zm1 2.438L5.563 15H1v-4.563z" />
    <path d="M11.5 7c-2.623 0-5 1.062-6.719 2.781l-1.468 1.531 1.374 1.376 1.5-1.5A7.49 7.49 0 0111.5 9a7.49 7.49 0 015.313 2.188L19.593 14 21 12.594 18.219 9.78A9.472 9.472 0 0011.5 7z" />
    <path d="M9 0h1v29H9V0zM23 19v8h-8l8-8zm-1 2.438L17.437 26H22v-4.563zM13 0h1v29h-1V0z" />
    <path d="M11.5 18c2.623 0 5 1.062 6.719 2.781l1.468 1.532-1.375 1.375-1.5-1.5A7.49 7.49 0 0011.5 20a7.49 7.49 0 00-5.313 2.188L3.408 25 2 23.594l2.781-2.813A9.472 9.472 0 0111.5 18z" />
    <path
      d="M10 0h3v29h-3V0zM1 10.438V15h4.563L1 10.437zM22 21.438V26h-4.563L22 21.437z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;