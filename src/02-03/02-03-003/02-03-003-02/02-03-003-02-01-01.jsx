import React from "react";

const SvgComponent = (props) => (
  <svg width={28} height={20} {...props}>
    <path d="M7.5 17l-7-7h14l-7 7zM4 10h2V3H4v7zM9 10h2V3H9v7z" />
    <path d="M6 10V3h3v7H6z" fill="#fff" />
    <path d="M20.5 0l-7 7h14l-7-7zM17 7h2v7h-2V7zM22 7h2v7h-2V7z" />
    <path d="M19 7v7h3V7h-3z" fill="#fff" />
    <path d="M0 18v2h28v-2H0z" />
  </svg>
);

export default SvgComponent;
