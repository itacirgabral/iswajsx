import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M7 3h2v12H7zM12 0v15h2V0h-2zM7 17h15v13H7zM5 21v-2H0v6h6v-2H2v-2h3z" />
  </svg>
);

export default SvgComponent;
