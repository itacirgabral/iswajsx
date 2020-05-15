import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 7h15v15H0zM15 0l1.406 1.406L10.813 7H8l7-7z" />
  </svg>
);

export default SvgComponent;
