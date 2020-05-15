import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 11l-8 8 8 8v-2l-6-6 6-6v-2z" />
    <path d="M26 0a8 8 0 018 8v4a9 9 0 01-9 9H8v-4h18a6 6 0 006-6V8a6 6 0 00-6-6H5V0h21z" />
  </svg>
);

export default SvgComponent;
