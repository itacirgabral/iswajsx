import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 0v14a5 5 0 005 5c1.38 0 2.626-.564 3.531-1.469l5.719-5.281c.343-.456 1.002-.75 1.75-.75 1.105 0 2 .672 2 1.5v19h2V13a5 5 0 00-5-5c-1.38 0-2.626.564-3.531 1.469L5.75 14.75c-.343.456-1.002.75-1.75.75-1.105 0-2-.672-2-1.5V0H0z" />
  </svg>
);

export default SvgComponent;