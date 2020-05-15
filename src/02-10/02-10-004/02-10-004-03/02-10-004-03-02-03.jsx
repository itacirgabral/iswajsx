import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M20 15l-5.5-5.5L20 4v11zm-1-2.438V6.439L15.937 9.5 19 12.563z" />
    <path d="M0 4.5C0 2.015 3.806 0 8.5 0h23C36.194 0 40 2.015 40 4.5v2c0 2.485-3.806 5.5-8.5 5.5H27V7h4.5C35.642 7 38 5.88 38 4.5S35.642 2 31.5 2h-23C4.358 2 2 3.12 2 4.5S4.358 7 8.5 7h5v5h-5C3.806 12 0 8.985 0 6.5v-2z" />
    <path d="M19 12.563L15.937 9.5 19 6.437v6.125z" fill="#fff" />
    <path d="M26 15l-5.5-5.5L26 4v11zm-1-2.438V6.439L21.937 9.5 25 12.563z" />
    <path d="M25 12.563L21.937 9.5 25 6.437v6.125z" fill="#fff" />
  </svg>
);

export default SvgComponent;
