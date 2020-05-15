import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 3.5L3.5 7l.719-.719L1.406 3.5 4.22.719 3.5 0 0 3.5z" />
    <path d="M3 5h4V4H3v1zM3 3h4V2H3v1z" />
  </svg>
);

export default SvgComponent;
