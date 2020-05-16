import React from "react";

const SvgComponent = (props) => (
  <svg width={18} height={30} {...props}>
    <path d="M0 17h14v13H0z" />
    <path fill="#fff" d="M2 19h10v9H2z" />
    <path d="M13 0h2v15h-2zM7 7c-1.656 0-3 1.344-3 3 0 1.3.842 2.397 2 2.813V15h2v-2.188c1.158-.415 2-1.511 2-2.812 0-1.656-1.344-3-3-3zM16 15v9s0 3-1 3v3s3 0 3-5V15h-2z" />
  </svg>
);

export default SvgComponent;
