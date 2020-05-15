import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M2 9v51h8V9H2z" />
    <path d="M12 .781L4.687 5H12V.781zM2 7v2h8V7H2z" fill="#fff" />
    <path d="M9.406 0L0 5.438V7h12V5H4.687L12 .781V0H9.406z" />
  </svg>
);

export default SvgComponent;
