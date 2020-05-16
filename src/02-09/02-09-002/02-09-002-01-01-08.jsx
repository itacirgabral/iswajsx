import React from "react";

const SvgComponent = (props) => (
  <svg width={27} height={27} {...props}>
    <path d="M7 0v14L0 7l7-7zM27 22a6 6 0 00-6-6h-5v-4a6 6 0 00-6-6H7v2h3a4 4 0 014 4v6h7a4 4 0 014 4v5h2v-5z" />
  </svg>
);

export default SvgComponent;
