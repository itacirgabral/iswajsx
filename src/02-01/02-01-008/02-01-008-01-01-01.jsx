import React from "react";

const SvgComponent = (props) => (
  <svg width={28} height={13} {...props}>
    <path d="M3 0v3H0v2h3v3H0v2h3v3h2v-3h3v3h2v-3h3V8h-3V5h3V3h-3V0H8v3H5V0H3zm2 5h3v3H5V5z" />
    <path fill="#fff" d="M5 5h3v3H5z" />
    <path d="M18 0v3h-3v2h3v3h-3v2h3v3h2v-3h3v3h2v-3h3V8h-3V5h3V3h-3V0h-2v3h-3V0h-2zm2 5h3v3h-3V5z" />
    <path fill="#fff" d="M20 5h3v3h-3z" />
  </svg>
);

export default SvgComponent;
