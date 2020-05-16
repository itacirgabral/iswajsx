import React from "react";

const SvgComponent = (props) => (
  <svg width={28} height={32} {...props}>
    <path d="M0 22.1V32h9.9l-2.011-2.01H2.01V24.11L0 22.101zM1 15l5.5-5.5L12 15h-1.414L6.5 10.914 2.414 15H1z" />
    <path d="M17 28C9.82 28 4 22.18 4 15h1c0 6.627 5.373 12 12 12h2v1h-2z" />
    <path
      d="M17 27c-6.627 0-12-5.373-12-12h3a9 9 0 009 9h2v3h-2z"
      fill="#fff"
    />
    <path d="M17 24a9 9 0 01-9-9h1a8 8 0 008 8h2v1h-2zM10 6L15.5.5 21 6h-1.414L15.5 1.914 11.414 6H10z" />
    <path d="M26 19c-7.18 0-13-5.82-13-13h1c0 6.627 5.373 12 12 12h2v1h-2z" />
    <path
      d="M26 18c-6.627 0-12-5.373-12-12h3a9 9 0 009 9h2v3h-2z"
      fill="#fff"
    />
    <path d="M26 15a9 9 0 01-9-9h1a8 8 0 008 8h2v1h-2z" />
    <path d="M3.958 26.627L26.586 4 28 5.414 5.373 28.042l-1.415-1.415z" />
  </svg>
);

export default SvgComponent;
