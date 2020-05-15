import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M25 0v16c0 .828-.895 1.5-2 1.5-.748 0-1.407-.294-1.75-.75l-5.719-5.281A4.978 4.978 0 0012 10a5 5 0 00-5 5v9c0 3.283-4 9-4 9h10s-4-5.717-4-9v-9c0-.828.895-1.5 2-1.5.748 0 1.407.294 1.75.75l5.719 5.281A4.978 4.978 0 0022 21a5 5 0 005-5V0h-2zM0 33l8 8 8-8h-2l-6 6-6-6H0z" />
  </svg>
);

export default SvgComponent;
