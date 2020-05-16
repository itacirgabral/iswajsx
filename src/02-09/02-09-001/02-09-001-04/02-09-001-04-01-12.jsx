import React from "react";

const SvgComponent = (props) => (
  <svg width={34} height={27} {...props}>
    <path d="M8 11v16l-8-8 8-8zM26 0a8 8 0 018 8v4a9 9 0 01-9 9H8v-4h18a6 6 0 006-6V8a6 6 0 00-6-6V0z" />
  </svg>
);

export default SvgComponent;
