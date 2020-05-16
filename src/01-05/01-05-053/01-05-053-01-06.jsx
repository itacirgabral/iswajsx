import React from "react";

const SvgComponent = (props) => (
  <svg width={30} height={15} {...props}>
    <path d="M15 0v15h8V0h-8zM0 0h13v4H0zM27.938 4.219L24 8.187V11l5.375-5.375-1.438-1.406z" />
  </svg>
);

export default SvgComponent;
