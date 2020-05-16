import React from "react";

const SvgComponent = (props) => (
  <svg width={42} height={16} {...props}>
    <path d="M0 9l7 7 7-7H0zm2.438 1h9.124L7 14.594 2.437 10z" />
    <path d="M12 0a6 6 0 00-6 6v3h2V6a4 4 0 014-4 4.01 4.01 0 012.844 1.156L19.75 8.25A5.992 5.992 0 0024 10a5.992 5.992 0 004.25-1.75l4.906-5.094A4.01 4.01 0 0136 2a4 4 0 014 4v4h2V6a6 6 0 00-6-6 5.992 5.992 0 00-4.25 1.75l-2.438 2.563C28.026 5.647 25.855 6 24 6c-1.855 0-4.026-.352-5.313-1.688L16.25 1.75A5.992 5.992 0 0012 0z" />
    <path d="M2.438 10L7 14.594 11.563 10H2.437z" fill="#fff" />
  </svg>
);

export default SvgComponent;
