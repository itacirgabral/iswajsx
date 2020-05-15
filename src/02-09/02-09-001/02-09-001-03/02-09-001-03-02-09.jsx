import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M39 2v12H27L39 2zm-1 2.438L29.437 13H38V4.437z" />
    <path d="M18 0a19.958 19.958 0 0114.156 5.844l1.532 1.468-1.376 1.375-1.593-1.406C27.46 4.024 22.97 2 18 2 13.03 2 8.539 4.024 5.281 7.281L1.406 11 0 9.594l3.844-3.75A19.958 19.958 0 0118 0z" />
    <path d="M38 4.438V13h-8.563L38 4.437z" fill="#fff" />
  </svg>
);

export default SvgComponent;
