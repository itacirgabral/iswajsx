import React from "react";

const SvgComponent = (props) => (
  <svg width={20} height={30} {...props}>
    <path d="M5 15h15v15H5zM8 4h2v11H8zM12 0h2v15h-2zM16 4h2v11h-2zM1.719 18.344L5 24.03V28l-5-8.656 1.719-1z" />
  </svg>
);

export default SvgComponent;
