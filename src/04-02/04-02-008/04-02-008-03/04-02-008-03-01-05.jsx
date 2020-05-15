import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M15 10.5L11.5 7l-.719.719 2.813 2.781-2.813 2.781.719.719 3.5-3.5z" />
    <path d="M7 10v5h1v-4h4v-1H7z" />
    <path d="M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 2C26.06 2 33 8.94 33 17.5 33 26.06 26.06 33 17.5 33 8.94 33 2 26.06 2 17.5 2 8.94 8.94 2 17.5 2z" />
    <path d="M28 10.5L24.5 7l-.719.719 2.813 2.781-2.813 2.781.719.719 3.5-3.5z" />
    <path d="M20 10v5h1v-4h4v-1h-5z" />
  </svg>
);

export default SvgComponent;