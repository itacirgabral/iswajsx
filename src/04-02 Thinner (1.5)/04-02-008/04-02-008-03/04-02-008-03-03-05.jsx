import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 3.5L4.5 7l-.719-.719L6.593 3.5 3.781.719 4.5 0 8 3.5z" />
    <path d="M0 3v5h1V4h4V3H0z" />
  </svg>
);

export default SvgComponent;