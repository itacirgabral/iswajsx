import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 0A8 8 0 00.25 6h15.5A8 8 0 008 0zM.25 10A8 8 0 008 16a8 8 0 007.75-6H.25z" />
    <path
      d="M.25 6A8.054 8.054 0 000 8c0 .689.086 1.362.25 2h15.5c.164-.638.25-1.311.25-2 0-.689-.086-1.362-.25-2H.25z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
