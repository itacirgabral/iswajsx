import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M40 19l-7-7-7 7h14z" />
    <path d="M24 0v19a3 3 0 006 0h6c0 2.761-2.686 5-6 5h-3a5 5 0 01-5-5V0h2z" />
    <path d="M44 13v1h-7v-1h7zm-15 0v1H19v-1h10zm-18 0v1H0v-1h11zM22 19l-7-7-7 7h14z" />
    <path d="M6 0v19a3 3 0 006 0h6c0 2.761-2.686 5-6 5H9a5 5 0 01-5-5V0h2z" />
  </svg>
);

export default SvgComponent;
