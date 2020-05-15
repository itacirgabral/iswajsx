import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M5 .281l-5 5L.719 6 5 1.719 9.281 6 10 5.281l-5-5z" />
    <path d="M5 4.281l-5 5L.719 10 5 5.719 9.281 10 10 9.281l-5-5z" />
  </svg>
);

export default SvgComponent;
