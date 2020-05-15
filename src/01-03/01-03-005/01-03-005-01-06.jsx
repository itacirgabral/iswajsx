import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M7 14h15v13H7zM3 2v6h2V4h2v8h2V2H3z" />
    <path d="M13 6h-2V0h6v12h-2V2h-2v4z" fillRule="evenodd" />
    <path d="M6 19v2H0v-6h5v2H2v2h4z" />
  </svg>
);

export default SvgComponent;
