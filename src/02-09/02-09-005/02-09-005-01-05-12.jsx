import React from "react";

const SvgComponent = (props) => (
  <svg width={18} height={20} {...props}>
    <path d="M5 20L.5 15.5 5 11v9zm-1-2.438v-4.125L1.906 15.5 4 17.563zM18 6c0 5.523-4.477 10-10 10H5v-1h3a9 9 0 009-9V0h1v6z" />
    <path d="M4 17.563L1.906 15.5 4 13.437v4.126z" fill="#fff" />
  </svg>
);

export default SvgComponent;
