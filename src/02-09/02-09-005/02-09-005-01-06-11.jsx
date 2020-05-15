import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 16l1 1v5h5l1 1H0v-7z" />
    <path d="M8 11.5a9.956 9.956 0 01-2.938 7.063l-1.187 1.312-.75-.75 1.25-1.25A8.988 8.988 0 007 11.5a8.988 8.988 0 00-2.625-6.375L0 .719.719 0l4.343 4.438A9.956 9.956 0 018 11.5z" />
  </svg>
);

export default SvgComponent;
