import React from "react";

const SvgComponent = (props) => (
  <svg width={16} height={30} {...props}>
    <path d="M7 3v4H3v2h4v4h2V9h4V7H9V3H7zM0 0h16v2H0zM0 14h16v2H0zM0 28h16v2H0zM7 17v4H3v2h4v4h2v-4h4v-2H9v-4H7z" />
  </svg>
);

export default SvgComponent;
