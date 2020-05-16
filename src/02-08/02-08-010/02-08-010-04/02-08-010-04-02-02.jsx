import React from "react";

const SvgComponent = (props) => (
  <svg width={23} height={40} {...props}>
    <path d="M15 0l8 8H7l8-8zm0 1.438L9.437 7h11.126L15 1.437zM16 8v28a4 4 0 01-4 4H8a8 8 0 01-8-8h10v3c0 1.657.895 3 2 3a2 2 0 002-2v-6.563c-.591.342-1.267.563-2 .563a4 4 0 110-8c.733 0 1.409.22 2 .563v-3.125c-.591.341-1.267.562-2 .562a4 4 0 110-8c.733 0 1.409.22 2 .563V8h2zm-4 6a2 2 0 100 4 2 2 0 000-4zm0 10a2 2 0 100 4 2 2 0 000-4z" />
    <path d="M15 1.438L20.563 7H9.438L15 1.437z" fill="#fff" />
  </svg>
);

export default SvgComponent;
