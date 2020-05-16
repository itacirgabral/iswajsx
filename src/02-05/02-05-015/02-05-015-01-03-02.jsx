import React from "react";

const SvgComponent = (props) => (
  <svg width={29} height={24} {...props}>
    <path d="M1 9.9V0h9.9L8.888 2.01H3.01V7.89L1 9.899z" />
    <path d="M5.201 5.615L23.586 24 25 22.586 6.615 4.2 5.201 5.615zM0 15l5.5 5.5L11 15H9.587L5.5 19.086 1.414 15H0z" />
    <path d="M16 4C9.925 4 5 8.925 5 15h1C6 9.477 10.477 5 16 5h2V4h-2zM23 6l5.5 5.5L23 17v-1.414l4.087-4.086L23 7.414V6z" />
    <path d="M12 22c0-6.075 4.925-11 11-11v1c-5.523 0-10 4.477-10 10v2h-1v-2z" />
  </svg>
);

export default SvgComponent;
