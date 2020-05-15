import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M6.5 0L5.78.719 8.594 3.5 5.812 6.313 6.5 7 10 3.5 6.5 0z" />
    <path d="M3.5 3A3.5 3.5 0 000 6.5C0 7.784.377 8.978 1 10h2V8c-1.105 0-2-.672-2-1.5A2.5 2.5 0 013.5 4H6V3H3.5zM18.5 0l-.719.719L20.594 3.5l-2.782 2.813L18.5 7 22 3.5 18.5 0z" />
    <path d="M15.5 3A3.5 3.5 0 0012 6.5c0 1.284.377 2.478 1 3.5h2V8c-1.105 0-2-.672-2-1.5A2.5 2.5 0 0115.5 4H18V3h-2.5z" />
  </svg>
);

export default SvgComponent;
