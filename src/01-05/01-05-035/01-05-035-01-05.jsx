import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M9 5h8v15H9z" />
    <path fill="#fff" d="M10 6h3v13h-3z" />
    <path d="M0 0v3c2.837 0 5.35.736 7 1.875V3h2.375C7.178 1.165 3.798 0 0 0zM21.938 9.219L19 12.188V15l4.375-4.375-1.438-1.406z" />
  </svg>
);

export default SvgComponent;
