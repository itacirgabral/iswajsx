import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 11h28v-1H0v1zM11 23h10V13L11 23zm2.406-1L20 15.437V22h-6.594z" />
    <path d="M9 10.5c0 2.623 1.062 5 2.781 6.719l2.5 2.5L15 19l-2.5-2.5a8.458 8.458 0 01-2.5-6c0-2.347.962-4.462 2.5-6L16.281.687 15.594 0 11.78 3.781A9.472 9.472 0 009 10.5z" />
    <path
      d="M10 10.5c0 2.347.962 4.462 2.5 6L15 19l2.125-2.125-2.5-2.5C13.63 13.38 13 12.019 13 10.5c0-1.519.63-2.88 1.625-3.875l3.781-3.813L16.281.688 12.5 4.5a8.458 8.458 0 00-2.5 6z"
      fill="#fff"
    />
    <path d="M13 10.5c0 1.519.63 2.88 1.625 3.875l2.5 2.5.688-.688-2.5-2.5A4.494 4.494 0 0114 10.5c0-1.243.498-2.373 1.313-3.188l3.812-3.78-.719-.72-3.781 3.813C13.63 7.62 13 8.981 13 10.5z" />
    <path d="M13.406 22H20v-6.563L13.406 22z" fill="#fff" />
    <path d="M17 12.5v-4H7v4h10z" />
  </svg>
);

export default SvgComponent;
