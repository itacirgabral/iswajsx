import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M15 4v15h8V4h-8z" />
    <path fill="#fff" d="M16 5h3v13h-3z" />
    <path d="M0 4h13v4H0z" />
    <path d="M6.219-.188L4.5.813l8.5 14.72v-3.97L6.219-.188z" />
  </svg>
);

export default SvgComponent;
