import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <rect width={15} height={14} y={13} ry={0} />
    <path fill="#fff" d="M2 15h6v10H2z" />
    <path d="M9 2v6h2V4h2v7h2V2H9z" />
    <path d="M7 11V0H1v6h2V2h2v9h2z" fillRule="evenodd" />
  </svg>
);

export default SvgComponent;