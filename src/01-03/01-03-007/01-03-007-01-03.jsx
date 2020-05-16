import React from "react";

const SvgComponent = (props) => (
  <svg width={23} height={30} {...props}>
    <path d="M8 15h15v15H8zM8 0h2v15H8zM16 7c-1.656 0-3 1.344-3 3 0 1.3.842 2.397 2 2.813V15h2v-2.188c1.158-.415 2-1.511 2-2.812 0-1.656-1.344-3-3-3zM1.625 15.813L8 22.186V25L.22 17.219l1.406-1.407z" />
  </svg>
);

export default SvgComponent;
