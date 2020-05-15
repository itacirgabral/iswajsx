import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M9 18l6-6H3l6 6zm0-1.406L5.437 13h7.125L9 16.594z" />
    <path d="M4.5 25C2.015 25 0 21.194 0 16.5v-8C0 3.806 2.015 0 4.5 0h2C8.985 0 11 3.806 11 8.5V11H7V8.5C7 4.358 5.88 1 4.5 1S2 4.358 2 8.5v8C2 20.642 3.12 24 4.5 24c1.085 0 1.998-2.1 2.344-5h3.937c-.567 3.468-2.259 6-4.281 6h-2z" />
    <path d="M9 16.594L12.563 13H5.436L9 16.594z" fill="#fff" />
  </svg>
);

export default SvgComponent;