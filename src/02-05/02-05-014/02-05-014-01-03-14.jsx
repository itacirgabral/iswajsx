import React from "react";

const SvgComponent = (props) => (
  <svg width={25} height={28} {...props}>
    <path d="M1 18.1V28h9.9l-2.011-2.01H3.01V20.11L1 18.101z" />
    <path d="M5.201 22.343L23.586 3.958 25 5.372 6.615 23.757l-1.414-1.414zM0 13l5.5-5.5L11 13H9.586L5.5 8.914 1.414 13H0z" />
    <path d="M16 24C9.925 24 5 19.075 5 13h1c0 5.523 4.477 10 10 10h2v1h-2zM7 6L12.5.5 18 6h-1.414L12.5 1.914 8.414 6H7z" />
    <path d="M23 17c-6.075 0-11-4.925-11-11h1c0 5.523 4.477 10 10 10h2v1h-2z" />
  </svg>
);

export default SvgComponent;
