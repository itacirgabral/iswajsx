import React from "react";

const SvgComponent = (props) => (
  <svg width={35} height={35} {...props}>
    <path d="M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z" />
    <path d="M12 21a4 4 0 100 8v-1c-1.38 0-2.5-1.343-2.5-3s1.12-3 2.5-3v-1zM23 21v1c1.38 0 2.5 1.343 2.5 3s-1.12 3-2.5 3v1a4 4 0 100-8z" />
  </svg>
);

export default SvgComponent;
