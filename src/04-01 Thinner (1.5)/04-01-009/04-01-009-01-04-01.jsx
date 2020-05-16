import React from "react";

const SvgComponent = (props) => (
  <svg width={9} height={9} {...props}>
    <path d="M2.813 0l-.688.688 6.188 6.187L9 6.156 2.812 0zM.688 2.125L0 2.813 6.188 9l.687-.719L.687 2.125z" />
  </svg>
);

export default SvgComponent;
