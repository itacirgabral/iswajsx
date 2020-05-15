import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M7.5 0l-7 7h2.719l4.219-4.25L11.688 7H14.5l-7-7z" />
    <path d="M23 6v14H6V7H4v15h21V6h-2z" />
    <path d="M18 6v9h-7V7H9v10h11V6h-2z" />
    <path d="M20 6v11H9V7H6v13h17V6h-3z" fill="#fff" />
  </svg>
);

export default SvgComponent;
