import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M3 10h4V9H3v1zM3 4h4V3H3v1z" />
    <path d="M0 9.5L3.5 13l.688-.719L1.438 9.5l2.968-3-2.968-3L4.188.719 3.5 0 0 3.5l3 3-3 3z" />
  </svg>
);

export default SvgComponent;
