import React from "react";

const SvgComponent = (props) => (
  <svg width={25} height={16} {...props}>
    <path d="M6.5 5.5L12 0v11L6.5 5.5zm1.438 0L11 8.563V2.436L7.937 5.5z" />
    <path d="M0 9.5c0-1.92 2.3-3.517 5.5-4.156v1.875C2.858 7.604 1 8.478 1 9.5 1 10.88 4.358 12 8.5 12h8c4.142 0 7.5-1.12 7.5-2.5 0-1.085-2.1-1.998-5-2.344V5.22c3.468.567 6 2.259 6 4.281v2c0 2.485-3.806 4.5-8.5 4.5h-8C3.806 16 0 13.985 0 11.5v-2z" />
    <path d="M7.938 5.5L11 2.437v6.126L7.937 5.5z" fill="#fff" />
    <path d="M12.5 5.5L18 0v11l-5.5-5.5zm1.438 0L17 8.563V2.436L13.937 5.5z" />
    <path d="M13.938 5.5L17 2.437v6.126L13.937 5.5z" fill="#fff" />
  </svg>
);

export default SvgComponent;
