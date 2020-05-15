import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M12 12L6 6l-6 6h2l4-4 4 4h2z" />
    <path d="M10.5 0C12.985 0 15 3.806 15 8.5v8c0 4.694-2.015 8.5-4.5 8.5h-2c-2.022 0-3.714-2.532-4.281-6h3.937c.346 2.9 1.259 5 2.344 5 1.38 0 2.5-3.358 2.5-7.5v-8C13 4.358 11.88 1 10.5 1c-.957 0-1.77 1.624-2.188 4H4.406C5.112 2.06 6.68 0 8.5 0h2z" />
    <path d="M12 18l-6-6-6 6h2l4-4 4 4h2z" />
  </svg>
);

export default SvgComponent;