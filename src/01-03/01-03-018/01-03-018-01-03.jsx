import React from "react";

const SvgComponent = (props) => (
  <svg width={22} height={30} {...props}>
    <path d="M7 3h2v12H7zM12 0v15h2V0h-2zM7 15h15v15H7zM5 21v-2H0v6h7v-2H2v-2h3z" />
  </svg>
);

export default SvgComponent;
