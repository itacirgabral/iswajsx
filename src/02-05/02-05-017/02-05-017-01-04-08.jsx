import React from "react";

const SvgComponent = (props) => (
  <svg width={30} height={29} {...props}>
    <path d="M25 19c-7.18 0-13-5.82-13-13h1c0 6.627 5.373 12 12 12h2v1h-2z" />
    <path
      d="M25 18c-6.627 0-12-5.373-12-12h3a9 9 0 009 9h2v3h-2z"
      fill="#fff"
    />
    <path d="M25 15a9 9 0 01-9-9h1a8 8 0 008 8h2v1h-2zM20 6L14.5.5 9 6h11zM30 10.9L20.1 1H30v9.9zM16 28C8.82 28 3 22.18 3 15h1c0 6.627 5.373 12 12 12h2v1h-2z" />
    <path d="M16 27C9.373 27 4 21.627 4 15h3a9 9 0 009 9h2v3h-2z" fill="#fff" />
    <path d="M24.627 4.958L2 27.586 3.414 29 26.042 6.373l-1.415-1.415z" />
    <path d="M16 24a9 9 0 01-9-9h1a8 8 0 008 8h2v1h-2zM11 15L5.5 9.5 0 15h11z" />
  </svg>
);

export default SvgComponent;
