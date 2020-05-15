import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M11 0h8v18h-8z" />
    <path fill="#fff" d="M12 1h3v16h-3z" />
    <path d="M4 0v7h3V4h2V0H4z" />
    <path d="M1.813 1.969L.405 3.406 9 12V9.187L1.812 1.97z" />
  </svg>
);

export default SvgComponent;
