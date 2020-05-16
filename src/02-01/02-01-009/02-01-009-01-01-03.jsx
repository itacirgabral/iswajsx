import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={21} {...props}>
    <path d="M4 4v3H1v2h3v3H1v2h3v3h2v-3h3v3h2v-3h3v-2h-3V9h3V7h-3V4H9v3H6V4H4zm2 5h3v3H6V9z" />
    <path fill="#fff" d="M6 9h3v3H6z" />
    <path d="M0 0h15v2H0zM0 19h15v2H0z" />
  </svg>
);

export default SvgComponent;
