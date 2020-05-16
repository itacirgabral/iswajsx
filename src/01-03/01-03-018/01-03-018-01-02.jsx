import React from "react";

const SvgComponent = (props) => (
  <svg width={22} height={30} {...props}>
    <path d="M0 15h15v15H0z" />
    <path fill="#fff" d="M2 17h6v11H2z" />
    <path d="M13 3h2v12h-2zM10 0H8v15h2V0zM17 19v2h3v2h-5v2h7v-6h-5z" />
  </svg>
);

export default SvgComponent;
