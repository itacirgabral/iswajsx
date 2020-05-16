import React from "react";

const SvgComponent = (props) => (
  <svg width={32} height={16} {...props}>
    <path d="M13.5 5.5L19 0v11l-5.5-5.5zm1.438 0L18 8.563V2.436L14.937 5.5z" />
    <path d="M0 10c0-2.761 5.373-5 12-5h.5v1.125C6.478 6.46 2 7.605 2 9c0 1.657 6.268 3 14 3s14-1.343 14-3c0-1.356-4.237-2.472-10-2.844V5h1c6.075 0 11 2.015 11 4.5v2c0 3.038-5.82 4.5-13 4.5h-7c-6.627 0-12-2.134-12-6z" />
    <path d="M14.938 5.5L18 2.437v6.126L14.937 5.5z" fill="#fff" />
  </svg>
);

export default SvgComponent;
