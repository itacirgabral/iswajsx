import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 0v19h19v-2H2V0H0z" />
    <path d="M6 0v13h13v-2H8V0H6z" />
    <path d="M2 0v17h17v-4H6V0H2z" fill="#fff" />
  </svg>
);

export default SvgComponent;