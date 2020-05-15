import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M6 0L0 6l6 6v-1.438L1.437 6 6 1.437V0zM19 13a9.5 9.5 0 00-9.5-9.5H6v1h3.5A8.5 8.5 0 0118 13v7h1v-7z" />
    <path
      d="M18 13a8.5 8.5 0 00-8.5-8.5H6v3h3.5A5.5 5.5 0 0115 13v7h3v-7z"
      fill="#fff"
    />
    <path d="M15 13a5.5 5.5 0 00-5.5-5.5H6v1h3.5A4.5 4.5 0 0114 13v7h1v-7z" />
  </svg>
);

export default SvgComponent;
