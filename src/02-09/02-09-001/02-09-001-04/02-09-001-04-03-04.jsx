import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M26 11l8 8-8 8v-2l6-6-6-6v-2zM8 0a8 8 0 00-8 8v4a9 9 0 009 9h17v-4H8a6 6 0 01-6-6V8a6 6 0 016-6V0z" />
  </svg>
);

export default SvgComponent;