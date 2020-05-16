import React from "react";

const SvgComponent = (props) => (
  <svg width={35} height={35} {...props}>
    <path d="M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z" />
    <path d="M12 25.5h11V27H12zM8 24h1v4H8zM26 24h1v4h-1zM26.5 19l-2.594 4.469.875.531 1.719-2.969L28.219 24l.875-.531L26.5 19zM8.5 19l-2.594 4.469.875.531L8.5 21.031 10.219 24l.875-.531L8.5 19z" />
  </svg>
);

export default SvgComponent;
