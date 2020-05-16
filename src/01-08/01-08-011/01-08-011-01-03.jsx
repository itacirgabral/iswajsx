import React from "react";

const SvgComponent = (props) => (
  <svg width={29} height={30} {...props}>
    <path d="M8 15h15v15H8zM8 0h2v15H8zM19 4h2v11h-2z" />
    <path d="M27 9l1.406 1.406L23 15.812V15h-2l6-6zM1.625 15.813L8 22.186V25L.219 17.219l1.406-1.407z" />
  </svg>
);

export default SvgComponent;
