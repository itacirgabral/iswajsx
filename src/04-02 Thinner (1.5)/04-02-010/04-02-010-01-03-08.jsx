import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M6.5 0L5.78.719 8.594 3.5 5.812 6.313 6.5 7 10 3.5 6.5 0z" />
    <path d="M3.5 3A3.5 3.5 0 000 6.5C0 7.784.377 8.978 1 10h2V8c-1.105 0-2-.672-2-1.5A2.5 2.5 0 013.5 4H6V3H3.5z" />
  </svg>
);

export default SvgComponent;
