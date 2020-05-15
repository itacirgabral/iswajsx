import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 5h42v4H0V5zM49 0l-5 5 .719.719L49 1.437l4.281 4.282L54 5l-5-5z" />
    <path d="M47 4h1v6h-1V4zM50 4h1v6h-1V4zM59 10l-5-5 .719-.719L59 8.563l4.281-4.282L64 5l-5 5z" />
    <path d="M57 6h1V0h-1v6zM60 6h1V0h-1v6zM69 0l-5 5 .719.719L69 1.437l4.281 4.282L74 5l-5-5z" />
    <path d="M67 4h1v6h-1V4zM70 4h1v6h-1V4z" />
  </svg>
);

export default SvgComponent;