import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M14 0a6 6 0 00-6 6v10c0 2.981-4 8-4 8h10s-4-5.019-4-8V6a4 4 0 014-4 3 3 0 013 3v5h2V5a5 5 0 00-5-5zM0 24l9 9 9-9H0zm2.438 1h13.124L9 31.594 2.437 25z" />
    <path d="M2.438 25L9 31.594 15.563 25H2.437z" fill="#fff" />
  </svg>
);

export default SvgComponent;