import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8.5 3h18v2h-18z" />
    <path d="M14.203 0l-.719.719L20.797 8l.719-.688L14.203 0zM17.5 9C7.835 9 0 16.835 0 26.5S7.835 44 17.5 44 35 36.165 35 26.5 27.165 9 17.5 9zm0 2C26.06 11 33 17.94 33 26.5 33 35.06 26.06 42 17.5 42 8.94 42 2 35.06 2 26.5 2 17.94 8.94 11 17.5 11z" />
  </svg>
);

export default SvgComponent;