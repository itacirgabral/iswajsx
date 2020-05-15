import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 0L0 8h16L8 0zm0 1.438L13.594 7H2.406L8 1.437zM7 8v14a5 5 0 005 5c1.38 0 2.626-.564 3.531-1.469l5.719-5.281c.343-.456 1.002-.75 1.75-.75 1.105 0 2 .672 2 1.5v8c0 4.177-6 11-6 11h14s-6-6.823-6-11v-8a5 5 0 00-5-5c-1.38 0-2.626.564-3.531 1.469L12.75 22.75c-.343.456-1.002.75-1.75.75-1.105 0-2-.672-2-1.5V8H7z" />
    <path d="M8 1.438L2.406 7h11.188L8 1.437z" fill="#fff" />
  </svg>
);

export default SvgComponent;