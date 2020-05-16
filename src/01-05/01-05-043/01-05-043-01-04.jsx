import React from "react";

const SvgComponent = (props) => (
  <svg width={16} height={16} {...props}>
    <path d="M8 0A8 8 0 00.25 6h15.5A8 8 0 008 0zM.25 10A8 8 0 008 16a8 8 0 007.75-6H.25z" />
    <path
      d="M8 2a5.997 5.997 0 00-5.656 4H.25A8.054 8.054 0 000 8c0 .689.086 1.362.25 2h2.094a5.997 5.997 0 0011.312 0h2.094c.164-.638.25-1.311.25-2 0-.689-.086-1.362-.25-2h-2.094A5.997 5.997 0 008 2z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
