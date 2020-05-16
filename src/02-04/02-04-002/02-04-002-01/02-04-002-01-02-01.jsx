import React from "react";

const SvgComponent = (props) => (
  <svg width={13} height={22} {...props}>
    <path d="M6.5.5L0 7h13L6.5.5zm0 1.438L10.563 6H2.437L6.5 1.937zM3 7h2v15H3V7zM8 7h2v15H8V7z" />
    <path d="M5 7v15h3V7H5zM6.5 1.938L2.437 6h8.126L6.5 1.937z" fill="#fff" />
    <path d="M6.5 10a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
  </svg>
);

export default SvgComponent;
