import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M9 0a4 4 0 00-4 4v1h1V4a3 3 0 013-3h1c1.657 0 3 1.79 3 4v9c0 3.283-4 9-4 9h10s-4-5.717-4-9V5a5 5 0 00-5-5H9z" />
    <path d="M0 5l5.5 5.5L11 5H0zm2.438 1h6.124L5.5 9.063 2.437 6zM0 13v1h40v-1H0z" />
    <path d="M26 0a4 4 0 00-4 4v1h1V4a3 3 0 013-3h1c1.657 0 3 1.79 3 4v9c0 3.283-4 9-4 9h10s-4-5.717-4-9V5a5 5 0 00-5-5h-1z" />
    <path d="M17 5l5.5 5.5L28 5H17zm2.438 1h6.125L22.5 9.063 19.437 6z" />
    <path
      d="M2.438 6L5.5 9.063 8.563 6H2.436zM19.438 6L22.5 9.063 25.563 6h-6.125z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;