import React from "react";

const SvgComponent = (props) => (
  <svg width={19} height={18} {...props}>
    <path d="M11 0h8v18h-8z" />
    <path fill="#fff" d="M12 1h3v16h-3z" />
    <path d="M11 0v4H7v3H4V0h7z" />
    <path d="M1.813 1.969L.405 3.406 11 14v-2.813L1.812 1.97z" />
  </svg>
);

export default SvgComponent;
