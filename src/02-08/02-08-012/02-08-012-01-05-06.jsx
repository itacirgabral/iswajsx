import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M7.5 13.5L12 18H3l4.5-4.5zm0 .969l-2.813 2.844h5.625L7.5 14.469z" />
    <path d="M1 0v17c0 1.657.895 3 2 3a2 2 0 002-2h5a4 4 0 01-4 4H5a5 5 0 01-5-5V0h1z" />
    <path d="M7.5 14.469l2.813 2.844H4.686L7.5 14.469z" fill="#fff" />
  </svg>
);

export default SvgComponent;
