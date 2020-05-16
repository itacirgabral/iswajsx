import React from "react";

const SvgComponent = (props) => (
  <svg width={18} height={20} {...props}>
    <path d="M12 14c-2.761 0-5-3.134-5-7s2.239-7 5-7 5 3.134 5 7-2.239 7-5 7zm0-1.5v-11c-1.933 0-3.5 2.462-3.5 5.5s1.567 5.5 3.5 5.5z" />
    <path d="M12 1.5a3.5 5.5 0 100 11V7z" fill="#fff" />
    <path d="M0 10h8l-1.5 1.5h-5v5L0 18v-8zM11 20a6.963 6.963 0 01-4.938-2.063L3.22 14.781l1.375-1.375 2.875 3.125a4.978 4.978 0 007.062 0l2.063-2.312L18 15.625l-2.063 2.313A6.963 6.963 0 0111 20z" />
  </svg>
);

export default SvgComponent;
