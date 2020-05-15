import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M4 11H0v-1h4v1zM4 9H0V8h4v1zM4 5H0V4h4v1zM4 3H0V2h4v1z" />
    <path d="M7 9.5L3.5 13l-.688-.719L5.563 9.5l-2.968-3 2.969-3L2.813.719 3.5 0 7 3.5l-3 3 3 3z" />
  </svg>
);

export default SvgComponent;
