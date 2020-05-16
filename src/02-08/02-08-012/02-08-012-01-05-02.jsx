import React from "react";

const SvgComponent = (props) => (
  <svg width={13} height={22} {...props}>
    <path d="M8.5.5L13 5H4L8.5.5zm0 .969L5.687 4.312h5.625L8.5 1.47zM9 5v13a4 4 0 01-4 4 5 5 0 01-5-5h5c0 1.657.672 3 1.5 3S8 18.657 8 17V5h1z" />
    <path d="M8.5 1.469l2.813 2.843H5.686L8.5 1.47z" fill="#fff" />
  </svg>
);

export default SvgComponent;
