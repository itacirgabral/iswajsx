import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M7 0v2L2 7l5 5v2L0 7l7-7z" />
    <path d="M7 6v2h3a4 4 0 110 8H4v4h7a3 3 0 010 6H3v4h6a7 7 0 007-7 5.994 5.994 0 00-3.594-5.5A5.994 5.994 0 0016 12a6 6 0 00-6-6H7z" />
  </svg>
);

export default SvgComponent;
