import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M11 0h8v18h-8z" />
    <path fill="#fff" d="M12 1h6v16h-6z" />
    <path d="M3 0v8h2V4h4V0H3zM0 16h9v2H0z" />
  </svg>
);

export default SvgComponent;
