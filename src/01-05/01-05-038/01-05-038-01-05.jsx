import React from "react";

const SvgComponent = (props) => (
  <svg width={17} height={20} {...props}>
    <path d="M9 0v20c8 0 8-8 8-8V8c0-8-8-8-8-8z" />
    <path
      d="M10 1.125v17.813c1.242-.135 2.22-.518 3-1.032V2.156c-1.075-.638-2.22-.913-3-1.031z"
      fill="#fff"
    />
    <path d="M7 .156C.012 1.25 0 8 0 8h2c0-2.597 2.93-3.493 5-3.813V.157z" />
  </svg>
);

export default SvgComponent;
