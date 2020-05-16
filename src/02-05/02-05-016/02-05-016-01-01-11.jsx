import React from "react";

const SvgComponent = (props) => (
  <svg width={32} height={20} {...props}>
    <path d="M25 9v2h-9V9h9zM13 9v2H0V9h13z" />
    <path d="M12 0a3 3 0 013 3v8a4 4 0 004 4h-9a4 4 0 004-4V3a2 2 0 00-4 0v4H9V3a3 3 0 013-3zM19 15l-4.5 4.5L10 15h9zM25 3v14l7-7-7-7z" />
  </svg>
);

export default SvgComponent;
