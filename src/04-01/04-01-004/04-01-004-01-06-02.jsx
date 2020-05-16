import React from "react";

const SvgComponent = (props) => (
  <svg width={9} height={9} {...props}>
    <path d="M6.188 0l.687.688L.687 6.875 0 6.156 6.188 0z" />
    <path
      d="M6.875.688l1.438 1.437-6.188 6.156L.687 6.875 6.875.687z"
      fill="#fff"
    />
    <path d="M8.313 2.125L9 2.813 2.812 9l-.687-.719 6.188-6.156z" />
  </svg>
);

export default SvgComponent;
