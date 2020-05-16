import React from "react";

const SvgComponent = (props) => (
  <svg width={24} height={29} {...props}>
    <path d="M9.9 1H0v9.9l2.01-2.011V3.01H7.89L9.899 1z" />
    <path d="M5.615 5.201L24 23.586 22.586 25 4.2 6.615l1.414-1.414zM15 0l5.5 5.5L15 11V9.587L19.086 5.5 15 1.414V.001z" />
    <path d="M4 16C4 9.925 8.925 5 15 5v1C9.477 6 5 10.477 5 16v2H4v-2zM6 23l5.5 5.5L17 23h-1.414L11.5 27.087 7.414 23H6z" />
    <path d="M22 12c-6.075 0-11 4.925-11 11h1c0-5.523 4.477-10 10-10h2v-1h-2z" />
  </svg>
);

export default SvgComponent;
