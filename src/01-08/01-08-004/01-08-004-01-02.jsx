import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M11 15h8v15h-8z" />
    <path fill="#fff" d="M12 16h3v13h-3z" />
    <path d="M17 0h2v15h-2zM6 15c-4 0-4 4-4 4v3h2v-2.25V19c0-2 2-2 2-2h5v-2H7.5 6zM11 3h2v12h-2zM6.063 7.219L4.625 8.625 11 15v-2.813L6.062 7.22z" />
    <path d="M3.094 10.313L.5 11.813 11 30v-6L3.094 10.312z" />
  </svg>
);

export default SvgComponent;
