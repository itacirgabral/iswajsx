import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 2C26.06 2 33 8.94 33 17.5 33 26.06 26.06 33 17.5 33 8.94 33 2 26.06 2 17.5 2 8.94 8.94 2 17.5 2z" />
    <path d="M17 11v12h1V11h-1zM20.5 10l-.72.719 2.782 2.781-3.5 3.5 3.5 3.5-2.781 2.781.719.719 3.5-3.5-3.5-3.5 3.5-3.5-3.5-3.5zM14.5 10l.719.719-2.781 2.781 3.5 3.5-3.5 3.5 2.78 2.781L14.5 24 11 20.5l3.5-3.5-3.5-3.5 3.5-3.5z" />
  </svg>
);

export default SvgComponent;
