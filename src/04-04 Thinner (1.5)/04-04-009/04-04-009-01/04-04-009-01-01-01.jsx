import React from "react";

const SvgComponent = (props) => (
  <svg width={35} height={35} {...props}>
    <path d="M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z" />
    <path d="M12.125 21.563L11 22.5c1.789 2.02 4.043 3.25 6.5 3.25s4.711-1.23 6.5-3.25l-1.125-.938C21.591 23.21 19.66 24.25 17.5 24.25s-4.09-1.04-5.375-2.688z" />
    <path d="M12.125 28.438L11 27.5c1.789-2.019 4.043-3.25 6.5-3.25s4.711 1.231 6.5 3.25l-1.125.938c-1.284-1.647-3.215-2.688-5.375-2.688s-4.09 1.041-5.375 2.688z" />
  </svg>
);

export default SvgComponent;
