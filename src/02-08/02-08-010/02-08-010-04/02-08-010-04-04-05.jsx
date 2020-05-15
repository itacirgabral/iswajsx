import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M14 0v11.75a4.443 4.443 0 00-2.5-.75 4.5 4.5 0 000 9c.928 0 1.788-.27 2.5-.75v4.5a4.443 4.443 0 00-2.5-.75 4.5 4.5 0 000 9c.928 0 1.788-.27 2.5-.75V43a4 4 0 01-4 4c-4.418 0-8-3.134-8-7H0c0 4.97 4.477 9 10 9a6 6 0 006-6V0h-2zm-2.5 13a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm0 12a2.5 2.5 0 110 5 2.5 2.5 0 010-5z" />
  </svg>
);

export default SvgComponent;