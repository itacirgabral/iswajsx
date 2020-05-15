import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M4 14v4H0v2h4v4h2v-4h4v-2H6v-4H4zM12 7v4H8v2h4v4h2v-4h4v-2h-4V7h-2zM20 0v4h-4v2h4v4h2V6h4V4h-4V0h-2z" />
  </svg>
);

export default SvgComponent;