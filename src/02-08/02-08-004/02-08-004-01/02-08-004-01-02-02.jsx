import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M16 0l7 7H9l7-7zm0 1.438L11.406 6h9.188L16 1.437zM17 7v6a5 5 0 01-5 5 4.978 4.978 0 01-3.531-1.469l-.75-.75A1.015 1.015 0 007 15.5a1 1 0 00-1 1V20c0 3.59 4 10 4 10H0s4-6.41 4-10v-3.5a3 3 0 013-3c.828 0 1.582.332 2.125.875l.75.75A2.996 2.996 0 0012 16a3 3 0 003-3V7h2z" />
    <path d="M16 1.438L20.594 6h-9.188L16 1.437z" fill="#fff" />
  </svg>
);

export default SvgComponent;