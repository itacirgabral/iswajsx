import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M3 11v3H0v2h3v3H0v2h3v3h2v-3h3v3h2v-3h3v-2h-3v-3h3v-2h-3v-3H8v3H5v-3H3zm2 5h3v3H5v-3z" />
    <path fill="#fff" d="M5 16h3v3H5z" />
    <path d="M14 0v3h-3v2h3v3h-3v2h3v3h2v-3h3v3h2v-3h3V8h-3V5h3V3h-3V0h-2v3h-3V0h-2zm2 5h3v3h-3V5z" />
    <path fill="#fff" d="M16 5h3v3h-3z" />
  </svg>
);

export default SvgComponent;
