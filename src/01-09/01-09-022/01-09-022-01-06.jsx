import React from "react";

const SvgComponent = (props) => (
  <svg width={22} height={26} {...props}>
    <path d="M7 11h15v15H7zM1 0v7h2V2h4v7h2V0H1zM5 14v2H2v3h4v2H0v-7h5z" />
  </svg>
);

export default SvgComponent;
