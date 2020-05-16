import React from "react";

const SvgComponent = (props) => (
  <svg width={18} height={30} {...props}>
    <path d="M4 17h14v13H4zM3 0h2v15H3zM11 7c-1.656 0-3 1.344-3 3 0 1.3.842 2.397 2 2.813V15h2v-2.188c1.158-.415 2-1.511 2-2.812 0-1.656-1.344-3-3-3zM0 15v10s0 5 3 5v-3s-1 0-1-3v-9H0z" />
  </svg>
);

export default SvgComponent;
