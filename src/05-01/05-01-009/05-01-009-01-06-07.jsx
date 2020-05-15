import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M12.5 3a3 3 0 11-6 0 3 3 0 016 0z" />
    <path d="M7.5 3.75v-1.5h-7v1.5h7z" />
  </svg>
);

export default SvgComponent;
