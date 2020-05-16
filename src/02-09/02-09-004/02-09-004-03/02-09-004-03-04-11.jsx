import React from "react";

const SvgComponent = (props) => (
  <svg width={20} height={45} {...props}>
    <path d="M12.5 0a7.5 7.5 0 110 15H8a6 6 0 000 12h3a9 9 0 110 18H6v-4h7a5 5 0 100-10h-3C4.477 31 0 26.523 0 21s4.477-10 10-10h3.5a4.5 4.5 0 000-9H2V0h10.5z" />
  </svg>
);

export default SvgComponent;
