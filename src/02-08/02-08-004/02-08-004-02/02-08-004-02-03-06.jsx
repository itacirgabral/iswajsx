import React from "react";

const SvgComponent = (props) => (
  <svg width={27} height={41} {...props}>
    <path d="M2 0v16c0 .828.895 1.5 2 1.5.748 0 1.407-.294 1.75-.75l5.719-5.281A4.978 4.978 0 0115 10a5 5 0 015 5v9c0 3.283 4 9 4 9H14s4-5.717 4-9v-9c0-.828-.895-1.5-2-1.5-.748 0-1.407.294-1.75.75l-5.719 5.281A4.978 4.978 0 015 21a5 5 0 01-5-5V0h2zM27 33l-8 8-8-8h2l6 6 6-6h2z" />
  </svg>
);

export default SvgComponent;
