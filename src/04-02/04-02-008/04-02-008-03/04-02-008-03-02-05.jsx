import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 3.5L4.5 0 3.78.719 6.593 3.5 3.781 6.281 4.5 7 8 3.5z" />
    <path d="M0 3v5h1V4h4V3H0zM21 3.5L17.5 0l-.719.719L19.594 3.5 16.78 6.281 17.5 7 21 3.5z" />
    <path d="M13 3v5h1V4h4V3h-5z" />
  </svg>
);

export default SvgComponent;
