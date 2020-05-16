import React from "react";

const SvgComponent = (props) => (
  <svg width={35} height={44} {...props}>
    <path d="M8.5 3h18v2h-18z" />
    <path d="M20.797 0l.719.719L14.203 8l-.719-.688L20.797 0zM17.5 9C7.835 9 0 16.835 0 26.5S7.835 44 17.5 44 35 36.165 35 26.5 27.165 9 17.5 9zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z" />
  </svg>
);

export default SvgComponent;
