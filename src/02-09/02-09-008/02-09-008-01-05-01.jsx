import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M9.5 0C7.58 0 5.652.723 4.187 2.188L0 6.28.75 7l4.156-4.094A6.476 6.476 0 019.5 1c1.795 0 3.417.73 4.594 1.906L18.28 7 19 6.281l-4.188-4.093A7.488 7.488 0 009.5 0z" />
    <path d="M9.5 6c-1.92 0-3.848.723-5.313 2.188L0 12.28.75 13l4.156-4.094A6.476 6.476 0 019.5 7c1.795 0 3.417.73 4.594 1.906L18.28 13l.719-.719-4.188-4.094A7.488 7.488 0 009.5 6z" />
    <path d="M9.5 12c-1.92 0-3.848.723-5.313 2.188L0 18.28.75 19l4.156-4.094A6.476 6.476 0 019.5 13c1.795 0 3.417.73 4.594 1.906L18.28 19l.719-.719-4.188-4.093A7.488 7.488 0 009.5 12z" />
  </svg>
);

export default SvgComponent;