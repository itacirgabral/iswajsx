import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 3v12h12L0 3zm1 2.438L9.563 14H1V5.437z" />
    <path d="M24.5 0A26.434 26.434 0 005.75 7.75l-.5.5 1.438 1.438.5-.5C11.62 4.753 17.735 2 24.5 2c6.765 0 12.879 2.754 17.313 7.188L44.593 12 46 10.594 43.25 7.75A26.434 26.434 0 0024.5 0z" />
    <path d="M1 5.438V14h8.563L1 5.437z" fill="#fff" />
  </svg>
);

export default SvgComponent;
