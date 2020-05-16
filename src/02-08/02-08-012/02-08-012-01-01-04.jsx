import React from "react";

const SvgComponent = (props) => (
  <svg width={28} height={25} {...props}>
    <path d="M1.1 9H11v9.9L1.1 9z" />
    <path d="M25.85 6.879L12.413 20.314a3 3 0 01-4.242-4.243l-4.243-4.243c-1.953 1.953-1.636 5.435.707 7.779l2.121 2.12a5 5 0 007.071 0L27.263 8.294 25.85 6.879z" />
    <path d="M1.1.515l-.707.707 6.364 6.364.707-.707L1.101.515zm12.021 12.02l-.707.708 11.314 11.313.707-.707-11.314-11.313z" />
  </svg>
);

export default SvgComponent;
