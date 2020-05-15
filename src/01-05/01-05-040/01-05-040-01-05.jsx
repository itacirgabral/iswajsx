import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M11 0v20c8 0 8-8 8-8V8c0-8-8-8-8-8z" />
    <path
      d="M12 1.125v17.813c1.242-.135 2.22-.518 3-1.032V2.156c-1.075-.638-2.22-.913-3-1.031z"
      fill="#fff"
    />
    <path d="M9 .156C2.012 1.25 2 8 2 8h2c0-2.597 2.93-3.493 5-3.813V.157zM0 18h9v2H0z" />
  </svg>
);

export default SvgComponent;
