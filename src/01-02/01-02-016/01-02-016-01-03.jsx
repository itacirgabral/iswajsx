import React from "react";

const SvgComponent = (props) => (
  <svg width={16} height={30} {...props}>
    <path d="M1 15h15v15H1zM7 6V3l-7 7 5 5h2v-1l-4-4 4-4zM7 0h2v15H7z" />
  </svg>
);

export default SvgComponent;
