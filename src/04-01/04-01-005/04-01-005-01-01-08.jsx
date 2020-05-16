import React from "react";

const SvgComponent = (props) => (
  <svg width={35} height={46} {...props}>
    <path d="M22 0h-7.071v1.016h6.055v6.055H22V0zM17.5 11C7.835 11 0 18.835 0 28.5S7.835 46 17.5 46 35 38.165 35 28.5 27.165 11 17.5 11zm0 2C26.06 13 33 19.94 33 28.5 33 37.06 26.06 44 17.5 44 8.94 44 2 37.06 2 28.5 2 19.94 8.94 13 17.5 13z" />
    <path d="M18.818 2.475l.707.707-4.243 4.243-.707-.707 4.243-4.243z" />
  </svg>
);

export default SvgComponent;
