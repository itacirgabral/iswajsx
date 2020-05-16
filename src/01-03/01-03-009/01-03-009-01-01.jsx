import React from "react";

const SvgComponent = (props) => (
  <svg width={23} height={30} {...props}>
    <path d="M0 15h15v15H0z" />
    <path fill="#fff" d="M2 17h11v11H2z" />
    <path d="M13 7c-1.656 0-3 1.344-3 3 0 1.3.842 2.397 2 2.813V15h2v-2.188c1.158-.415 2-1.511 2-2.812 0-1.656-1.344-3-3-3zM7 0h2v15H7zM21.375 15.813L15 22.186V25l7.781-7.781-1.406-1.407z" />
  </svg>
);

export default SvgComponent;
