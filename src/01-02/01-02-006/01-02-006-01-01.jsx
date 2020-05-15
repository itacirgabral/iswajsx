import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 15h15v15H0z" />
    <path fill="#fff" d="M2 17h11v11H2z" />
    <path d="M13 0h2v15h-2zM7 7c-1.656 0-3 1.344-3 3 0 1.3.842 2.397 2 2.813V15h2v-2.188c1.158-.415 2-1.511 2-2.812 0-1.656-1.344-3-3-3z" />
  </svg>
);

export default SvgComponent;
