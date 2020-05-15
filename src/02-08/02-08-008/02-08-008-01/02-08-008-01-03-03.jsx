import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 0v9.9l1.414-1.415v-7.07h7.071L9.9 0H0z" />
    <path d="M4.243 5.657l10.606 10.606a4 4 0 005.657 0l1.414-1.414c2.734-2.733 3.05-6.849.707-9.192l-4.95 4.95c1.563 1.562 2.196 3.461 1.415 4.242a2 2 0 01-2.829 0L5.657 4.243 4.243 5.657z" />
  </svg>
);

export default SvgComponent;
