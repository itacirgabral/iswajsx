import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 12h15v15H0zM9 2v6h2V4h2v8h2V2H9z" />
    <path d="M7 12V0H1v6h2V2h2v10h2z" fillRule="evenodd" />
    <path fill="#fff" d="M2 14h11v11H2z" />
    <path d="M15 19v2h7v-6h-5v2h3v2h-5z" />
  </svg>
);

export default SvgComponent;