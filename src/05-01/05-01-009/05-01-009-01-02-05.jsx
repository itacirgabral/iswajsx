import React from "react";

const SvgComponent = (props) => (
  <svg width={35} height={48} {...props}>
    <path d="M17.5 13C7.835 13 0 20.835 0 30.5S7.835 48 17.5 48 35 40.165 35 30.5 27.165 13 17.5 13zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16zM21.5 12a3 3 0 110-6 3 3 0 010 6z" />
    <path d="M20.75 7h1.5V0h-1.5v7zM13.5 12a3 3 0 110-6 3 3 0 010 6z" />
    <path d="M12.75 7h1.5V0h-1.5v7z" />
  </svg>
);

export default SvgComponent;
