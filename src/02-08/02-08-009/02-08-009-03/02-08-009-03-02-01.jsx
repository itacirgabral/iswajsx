import React from "react";

const SvgComponent = (props) => (
  <svg width={28} height={31} {...props}>
    <path d="M7 0L0 7h14L7 0zm0 1.438L11.594 6H2.438L7 1.437zM6 7v8a3 3 0 003 3 2.98 2.98 0 002-.781V21a3 3 0 003 3 2.98 2.98 0 002-.781V27a4 4 0 004 4h1c3.866 0 7-2.686 7-6h-6c0 2.21-.895 4-2 4a2 2 0 01-2-2v-8.563l-3.281 3.282A1.015 1.015 0 0114 22a1 1 0 01-1-1v-8.563L9.719 15.72A1.015 1.015 0 019 16a1 1 0 01-1-1V7H6z" />
    <path d="M7 1.438L2.437 6h9.157L7 1.437z" fill="#fff" />
  </svg>
);

export default SvgComponent;
