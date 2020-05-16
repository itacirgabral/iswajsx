import React from "react";

const SvgComponent = (props) => (
  <svg width={16} height={25} {...props}>
    <path d="M5.5 8.5L0 14h11L5.5 8.5zm0 1.438L8.563 13H2.436L5.5 9.937z" />
    <path d="M9.5 0C7.196 0 5.327 3.281 5.062 7.5h1.97C7.196 3.839 8.233 1 9.5 1 10.88 1 12 4.358 12 8.5v8c0 4.142-1.12 7.5-2.5 7.5S7 20.642 7 16.5V15H5v1.5C5 21.194 7.015 25 9.5 25h2c2.485 0 4.5-3.806 4.5-8.5v-8C16 3.806 13.985 0 11.5 0h-2z" />
    <path d="M5.5 9.938L2.437 13h6.126L5.5 9.937z" fill="#fff" />
  </svg>
);

export default SvgComponent;
