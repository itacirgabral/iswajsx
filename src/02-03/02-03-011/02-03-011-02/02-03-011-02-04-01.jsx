import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 0v31l12-11.688V31h2V14.5l-12 12V0H0z" />
    <path d="M6 0v16.813l12-12V31h2V0L8 12V0H6z" />
    <path d="M2 0v26.5l12-12V31h4V4.812l-12 12V0H2z" fill="#fff" />
  </svg>
);

export default SvgComponent;
