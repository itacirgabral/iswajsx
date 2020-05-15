import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M15 10.5L11.5 7l-.719.719 2.813 2.781-2.813 2.781.719.719 3.5-3.5z" />
    <path d="M7 10v5h1v-4h4v-1H7z" />
    <path d="M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z" />
    <path d="M28 10.5L24.5 7l-.719.719 2.813 2.781-2.813 2.781.719.719 3.5-3.5z" />
    <path d="M20 10v5h1v-4h4v-1h-5z" />
  </svg>
);

export default SvgComponent;