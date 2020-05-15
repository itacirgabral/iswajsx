import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 16l7 7V9l-7 7zM7 15v2h8v-2H7zm14 0v2h9v-2h-9zM18 0l-7 7h14l-7-7zM17 7h2v19h-2V7z" />
  </svg>
);

export default SvgComponent;
