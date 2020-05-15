import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M12 6C0 6 0 14 0 14c0 7 12 7 12 7h8V6h-8zm0 4v9c-9 0-9-4-9-4 0-5 9-5 9-5z" />
    <path fill="#fff" d="M13 7h6v13h-6z" />
    <path d="M8.344.344L6.219 2.469l5.656 5.656L12 6h2L8.344.344z" />
  </svg>
);

export default SvgComponent;