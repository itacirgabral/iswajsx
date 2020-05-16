import React from "react";

const SvgComponent = (props) => (
  <svg width={17} height={20} {...props}>
    <path d="M9 0v20c8 0 8-8 8-8V8c0-8-8-8-8-8zM9 4V0C0 0 0 8 0 8h2c0-4 7-4 7-4z" />
  </svg>
);

export default SvgComponent;
