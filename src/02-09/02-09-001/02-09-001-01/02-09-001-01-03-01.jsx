import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 1v8h8L6.5 7.5h-5v-5L0 1z" />
    <path d="M11.5 0c-2.623 0-5 1.062-6.719 2.781L3.313 4.312l1.374 1.375 1.5-1.5A7.49 7.49 0 0111.5 2a7.49 7.49 0 015.313 2.188L20.593 8 22 6.594 18.219 2.78A9.472 9.472 0 0011.5 0z" />
  </svg>
);

export default SvgComponent;