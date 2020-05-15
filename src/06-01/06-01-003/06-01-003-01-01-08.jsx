import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M13.5 4A8.5 8.5 0 005 12.5a8.501 8.501 0 005 7.75V23H7a7 7 0 00-7 7v13h2V30a5 5 0 015-5h13a5 5 0 015 5v13h2V30a7 7 0 00-7-7h-3v-2.75a8.501 8.501 0 005-7.75A8.5 8.5 0 0013.5 4zM6 30v13h3V30H6zm12 0v13h3V30h-3zM33 43V0h2v43h-2z" />
  </svg>
);

export default SvgComponent;
