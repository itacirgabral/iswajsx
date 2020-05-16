import React from "react";

const SvgComponent = (props) => (
  <svg width={20} height={17} {...props}>
    <path d="M0 7.1L9.9 17H0V7.1z" />
    <path d="M19.092 2.15a4 4 0 00-5.657 0L9.192 6.394c-1.795 1.795-7.07 2.829-7.07 2.829l5.656 5.657s1.034-5.276 2.829-7.071l4.242-4.243a2 2 0 012.829 0 1 1 0 010 1.414l-4.243 4.243 1.414 1.414 4.243-4.243a3 3 0 000-4.242z" />
  </svg>
);

export default SvgComponent;
