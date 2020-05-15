import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M18.5 5.5L13 0v11l5.5-5.5zm-1.438 0L14 8.563V2.436L17.063 5.5z" />
    <path d="M32 10c0-2.761-5.373-5-12-5h-.5v1.125C25.522 6.46 30 7.605 30 9c0 1.657-6.268 3-14 3S2 10.657 2 9c0-1.356 4.237-2.472 10-2.844V5h-1C4.925 5 0 7.015 0 9.5v2C0 14.538 5.82 16 13 16h7c6.627 0 12-2.134 12-6z" />
    <path d="M17.063 5.5L14 2.437v6.126L17.063 5.5z" fill="#fff" />
  </svg>
);

export default SvgComponent;
