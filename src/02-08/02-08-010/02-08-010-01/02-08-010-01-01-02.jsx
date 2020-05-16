import React from "react";

const SvgComponent = (props) => (
  <svg width={19} height={26} {...props}>
    <path d="M19 7l-7-7-7 7h14zM13 7v15a4 4 0 01-4 4H7c-3.866 0-7-2.686-7-6h7c0 2.21.895 4 2 4a2 2 0 002-2v-4.625a3.5 3.5 0 110-5.75V7h2zm-4 5.5a2 2 0 100 4 2 2 0 000-4z" />
  </svg>
);

export default SvgComponent;
