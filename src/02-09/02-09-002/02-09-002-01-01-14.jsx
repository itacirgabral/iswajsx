import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M6 13V0l6.5 6.5L6 13z" />
    <path d="M6 6v1c-2.21 0-4 2.239-4 5a4 4 0 004 4h7v9a3 3 0 003 3h8v4h-6a7 7 0 01-7-7v-5H8a8 8 0 01-8-8 6 6 0 016-6z" />
  </svg>
);

export default SvgComponent;