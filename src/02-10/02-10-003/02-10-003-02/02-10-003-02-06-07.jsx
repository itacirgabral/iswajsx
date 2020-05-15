import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M13 0v2l3.5 3.5L13 9v2l5.5-5.5L13 0z" />
    <path d="M32 10c0-2.761-5.373-5-12-5h-.5v1.125C25.522 6.46 30 7.605 30 9c0 1.657-6.268 3-14 3S2 10.657 2 9c0-1.356 4.237-2.472 10-2.844V5h-1C4.925 5 0 7.015 0 9.5v2C0 14.538 5.82 16 13 16h7c6.627 0 12-2.134 12-6z" />
  </svg>
);

export default SvgComponent;