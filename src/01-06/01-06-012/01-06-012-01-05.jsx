import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M9 10h15v13H9z" />
    <path fill="#fff" d="M11 12h6v9h-6z" />
    <path d="M0 9v1c-.003.062 0 4 4 4h4v-2H4s-2 0-2-2V9H0zM4 4C0 4 0 8 0 8v1h2V8c0-2 2-2 2-2h3c2 0 2 2 2 2h2c0-4-4-4-4-4H4z" />
    <path d="M8 1C5.3 1 4.441 2.815 4.156 4H6.25C6.776 3.02 8 3 8 3h2c2 0 2 2 2 2v3h2V5c0-4-4-4-4-4H8z" />
    <path d="M12 0c-1.298 0-2.158.431-2.75 1H10s1.606-.005 2.781 1H14c2 0 2 2 2 2v4h2V4c0-4-4-4-4-4h-2z" />
  </svg>
);

export default SvgComponent;
