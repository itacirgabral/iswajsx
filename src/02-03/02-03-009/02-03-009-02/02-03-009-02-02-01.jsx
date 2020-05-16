import React from "react";

const SvgComponent = (props) => (
  <svg width={24} height={34} {...props}>
    <path d="M8 0L0 8h16L8 0zm0 1.438L13.563 7H2.437L8 1.437zM4 8v26l20-20-1.406-1.406L6 29.187V8H4z" />
    <path d="M10 8v11.5l9.75-9.75-1.406-1.406L12 14.688V8h-2z" />
    <path
      d="M6 8v21.188l16.594-16.594L19.75 9.75 10 19.5V8H6zM8 1.438L2.437 7h11.126L8 1.437z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
