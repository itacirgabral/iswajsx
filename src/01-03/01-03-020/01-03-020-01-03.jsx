import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M6 15h15v15H6zM3 6v7h2V8h2v7h2V6H3zM14 0h-2v15h2V0z" />
    <path d="M2.25 8.219L.312 8.75 6 30v-7.781l-3.75-14z" />
  </svg>
);

export default SvgComponent;