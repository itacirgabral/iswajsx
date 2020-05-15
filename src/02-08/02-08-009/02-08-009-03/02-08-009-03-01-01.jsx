import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 7l7-7 7 7H0zM6 7v8a3 3 0 003 3 2.98 2.98 0 002-.781V21a3 3 0 003 3 2.98 2.98 0 002-.781V27a4 4 0 004 4h1c3.866 0 7-2.686 7-6h-6c0 2.21-.895 4-2 4a2 2 0 01-2-2v-8.563l-3.281 3.282A1.015 1.015 0 0114 22a1 1 0 01-1-1v-8.563L9.719 15.72A1.015 1.015 0 019 16a1 1 0 01-1-1V7H6z" />
  </svg>
);

export default SvgComponent;
