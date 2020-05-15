import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M20 15l5.5-5.5L20 4v11zm1-2.438V6.439L24.063 9.5 21 12.563z" />
    <path d="M40 4.5C40 2.015 36.194 0 31.5 0h-23C3.806 0 0 2.015 0 4.5v2C0 8.985 3.806 12 8.5 12H13V7H8.5C4.358 7 2 5.88 2 4.5S4.358 2 8.5 2h23C35.642 2 38 3.12 38 4.5S35.642 7 31.5 7h-5v5h5c4.694 0 8.5-3.015 8.5-5.5v-2z" />
    <path d="M21 12.563L24.063 9.5 21 6.437v6.125z" fill="#fff" />
    <path d="M14 15l5.5-5.5L14 4v11zm1-2.438V6.439L18.063 9.5 15 12.563z" />
    <path d="M15 12.563L18.063 9.5 15 6.437v6.125z" fill="#fff" />
  </svg>
);

export default SvgComponent;