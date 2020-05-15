import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M12 11C0 11 0 19 0 19c0 7 12 7 12 7h8V11h-8zm0 4v9c-9 0-9-4-9-4 0-5 9-5 9-5z" />
    <path fill="#fff" d="M13 12h6v13h-6z" />
    <path d="M13 0h2v11h-2z" />
    <path d="M8.344 5.344L6.938 6.75 12 11.813 14 11 8.344 5.344z" />
  </svg>
);

export default SvgComponent;