import React from "react";

const SvgComponent = (props) => (
  <svg width={16} height={27} {...props}>
    <path d="M8 7v15h8V7H8z" />
    <path fill="#fff" d="M9 8h3v13H9z" />
    <path d="M1.5.5L.094 1.938 6 7.813V5L1.5.5zM6 21.188l-4.5 4.468 1.438 1.407L6 24v-2.813z" />
  </svg>
);

export default SvgComponent;
