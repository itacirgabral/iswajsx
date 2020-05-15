import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 1h20v9H0z" />
    <path fill="#fff" d="M2 3h16v3H2z" />
    <path d="M25.25-.063L21 4.188V7l5.656-5.656L25.25-.063z" />
  </svg>
);

export default SvgComponent;
