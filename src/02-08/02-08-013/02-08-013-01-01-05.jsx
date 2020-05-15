import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M4 19l7-7 7 7H4z" />
    <path d="M20 0v19a3 3 0 01-6 0H8c0 2.761 2.686 5 6 5h3a5 5 0 005-5V0h-2z" />
    <path d="M0 13v1h7v-1H0zm15 0v1h10v-1H15zm18 0v1h11v-1H33zM22 19l7-7 7 7H22z" />
    <path d="M38 0v19a3 3 0 01-6 0h-6c0 2.761 2.686 5 6 5h3a5 5 0 005-5V0h-2z" />
  </svg>
);

export default SvgComponent;