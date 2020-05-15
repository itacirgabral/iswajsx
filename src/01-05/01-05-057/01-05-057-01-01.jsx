import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M15 3v15h8V3h-8z" />
    <path fill="#fff" d="M16 4h6v13h-6z" />
    <path d="M0 3v2h6V3H0zm10 0v2h5V3h-5zM0 6v3h15V6H0z" />
    <path d="M7.219.531l-1.719 1L15 18v-3.969L7.219.531z" />
  </svg>
);

export default SvgComponent;
