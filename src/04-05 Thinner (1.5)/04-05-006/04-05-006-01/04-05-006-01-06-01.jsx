import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M3.5 0a3.5 3.5 0 000 7A4.46 4.46 0 007 5.312l-.719-.718A3.441 3.441 0 013.5 6a2.5 2.5 0 110-5 1.5 1.5 0 010 3 .5.5 0 110-1V2a1.5 1.5 0 000 3 2.5 2.5 0 100-5z" />
    <path
      d="M3.5 1a2.5 2.5 0 100 5 3.47 3.47 0 002.781-1.406l-.718-.688A2.471 2.471 0 013.5 5a1.5 1.5 0 010-3v1a.5.5 0 100 1 1.5 1.5 0 000-3z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
