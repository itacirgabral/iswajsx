import React from "react";

const SvgComponent = (props) => (
  <svg width={27} height={27} {...props}>
    <path d="M27 20H13l7 7 7-7zM5 0a6 6 0 016 6v5h4a6 6 0 016 6v3h-2v-3a4 4 0 00-4-4H9V6a4 4 0 00-4-4H0V0h5z" />
  </svg>
);

export default SvgComponent;
