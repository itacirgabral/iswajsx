import React from "react";

const SvgComponent = (props) => (
  <svg width={24} height={28} {...props}>
    <path d="M9.9 1H0v9.9l2.01-2.011V3.01H7.89L9.899 1z" />
    <path d="M5.615 5.201L24 23.586 22.586 25 4.2 6.615l1.414-1.414zM12 28l-5.5-5.5L12 17v1.414L7.914 22.5 12 26.586V28z" />
    <path d="M23 12c0 6.075-4.925 11-11 11v-1c5.523 0 10-4.477 10-10v-2h1v2zM20 6L14.5.5 9 6h1.414L14.5 1.914 18.586 6H20z" />
    <path d="M4 17c6.075 0 11-4.925 11-11h-1c0 5.523-4.477 10-10 10H2v1h2z" />
  </svg>
);

export default SvgComponent;
