import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M2 73V10h2v63H2zM8 73V10h2v63H8z" />
    <path d="M12 .781L4.687 5H12V.781zM2 7v3h2v63h4V10h2V7H2z" fill="#fff" />
    <path d="M9.406 0L0 5.438V7h12V5H4.687L12 .781V0H9.406z" />
  </svg>
);

export default SvgComponent;
