import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M18 0h2v15h-2zM12 15C0 15 0 23 0 23c0 7 12 7 12 7h8V15h-8zm0 4v9c-9 0-9-4-9-4 0-5 9-5 9-5z" />
    <path fill="#fff" d="M13 16h3v13h-3z" />
  </svg>
);

export default SvgComponent;
