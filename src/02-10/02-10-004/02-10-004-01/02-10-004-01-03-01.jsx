import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M3 12l6-6 6 6h-2L9 8l-4 4H3z" />
    <path d="M4.5 0C2.015 0 0 3.806 0 8.5v8C0 21.194 2.015 25 4.5 25h2c2.022 0 3.714-2.532 4.281-6H6.844c-.346 2.9-1.259 5-2.344 5C3.12 24 2 20.642 2 16.5v-8C2 4.358 3.12 1 4.5 1c.957 0 1.77 1.624 2.188 4h3.906C9.888 2.06 8.32 0 6.5 0h-2z" />
    <path d="M3 18l6-6 6 6h-2l-4-4-4 4H3z" />
  </svg>
);

export default SvgComponent;