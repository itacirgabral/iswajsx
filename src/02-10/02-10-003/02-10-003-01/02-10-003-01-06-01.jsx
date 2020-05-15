import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 14h2l3.5-3.5L9 14h2L5.5 8.5 0 14z" />
    <path d="M9.5 0C7.196 0 5.327 3.281 5.062 7.5h1.97C7.196 3.839 8.233 1 9.5 1 10.88 1 12 4.358 12 8.5v8c0 4.142-1.12 7.5-2.5 7.5S7 20.642 7 16.5V15H5v1.5C5 21.194 7.015 25 9.5 25h2c2.485 0 4.5-3.806 4.5-8.5v-8C16 3.806 13.985 0 11.5 0h-2z" />
  </svg>
);

export default SvgComponent;