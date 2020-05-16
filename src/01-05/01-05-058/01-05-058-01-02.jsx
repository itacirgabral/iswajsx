import React from "react";

const SvgComponent = (props) => (
  <svg width={23} height={15} {...props}>
    <path d="M15 0v15h8V0h-8z" />
    <path fill="#fff" d="M16 1h3v13h-3z" />
    <path d="M0 0h15v4H0zM5 4l10 10v-2.813L7.844 4H5z" />
  </svg>
);

export default SvgComponent;
