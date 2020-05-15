import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M6 20l-6-6 6-6v12zm-1-2.438v-7.125L1.437 14 5 17.563zM19 7a9.5 9.5 0 01-9.5 9.5H6v-1h3.5A8.5 8.5 0 0018 7V0h1v7z" />
    <path
      d="M18 7a8.5 8.5 0 01-8.5 8.5H6v-3h3.5A5.5 5.5 0 0015 7V0h3v7z"
      fill="#fff"
    />
    <path d="M15 7a5.5 5.5 0 01-5.5 5.5H6v-1h3.5A4.5 4.5 0 0014 7V0h1v7z" />
    <path d="M5 17.563L1.437 14 5 10.437v7.126z" fill="#fff" />
  </svg>
);

export default SvgComponent;
