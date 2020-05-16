import React from "react";

const SvgComponent = (props) => (
  <svg width={25} height={20} {...props}>
    <path d="M25 7L18.5.5 12 7h13zM19 7v6c0 3.866-2.239 7-5 7H9a9 9 0 01-9-9h11c0 3.314 1.343 6 3 6a4 4 0 004-4V7h1z" />
  </svg>
);

export default SvgComponent;
