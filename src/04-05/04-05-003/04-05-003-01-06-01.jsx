import React from "react";

const SvgComponent = (props) => (
  <svg width={23} height={15} {...props}>
    <path d="M11.5 5a5 5 0 100 10 5 5 0 000-10zm0 1a4 4 0 110 8 4 4 0 010-8z" />
    <path d="M7 9h9v2H7zM2.938.438L.094 3.28.813 4l2.156-2.125L5.094 4 7.25 1.875 9.375 4l2.156-2.125L13.656 4l2.156-2.125L17.939 4l2.125-2.125L22.218 4l.718-.719L20.095.437l-2.157 2.126L15.781.437l-2.125 2.126L11.5.437 9.375 2.563 7.219.437 5.094 2.563 2.937.437z" />
  </svg>
);

export default SvgComponent;
