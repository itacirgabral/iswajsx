import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M7.5 0l-7 7h14l-7-7zm0 1.438L12.063 6H2.937L7.5 1.437zM4 7v14h16v-2H6V7H4z" />
    <path d="M9 7v9h11v-2h-9V7H9z" />
    <path
      d="M6 7v12h14v-3H9V7H6zM7.5 1.438L2.937 6h9.126L7.5 1.437z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;