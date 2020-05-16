import React from "react";

const SvgComponent = (props) => (
  <svg width={5} height={5} {...props}>
    <path d="M2 0h1v5H2z" />
    <path d="M4.415.817l.5.866-4.33 2.5-.5-.866z" />
    <path d="M.085 1.683l.5-.866 4.33 2.5-.5.866z" />
  </svg>
);

export default SvgComponent;
