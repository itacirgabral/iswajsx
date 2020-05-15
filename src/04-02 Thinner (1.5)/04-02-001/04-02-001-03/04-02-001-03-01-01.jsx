import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M13 16l.719-.719-7-7L6 9l7 7zM15.281 13.719L16 13 9 6l-.719.719 7 7zM22 16l-.719-.719 7-7L29 9l-7 7zM19.719 13.719L19 13l7-7 .719.719-7 7z" />
    <path d="M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z" />
  </svg>
);

export default SvgComponent;