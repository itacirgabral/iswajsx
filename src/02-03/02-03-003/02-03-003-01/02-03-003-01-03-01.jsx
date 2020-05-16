import React from "react";

const SvgComponent = (props) => (
  <svg width={28} height={17} {...props}>
    <path d="M7.5 17l-7-7h2.719l4.219 4.25 4.25-4.25H14.5l-7 7zM4 10h2V3H4v7zM9 10h2V3H9v7z" />
    <path d="M6 10V3h3v7H6z" fill="#fff" />
    <path d="M20.5 0l-7 7h2.719l4.218-4.25L24.688 7H27.5l-7-7zM17 7h2v7h-2V7zM22 7h2v7h-2V7z" />
    <path d="M19 7v7h3V7h-3z" fill="#fff" />
  </svg>
);

export default SvgComponent;
