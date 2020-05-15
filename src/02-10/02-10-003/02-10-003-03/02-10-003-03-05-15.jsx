import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M17.5 5.5L23 0v11l-5.5-5.5zm1.438 0L22 8.563V2.436L18.937 5.5z" />
    <path d="M0 9.5C0 7.015 3.806 5 8.5 5h8v2h-8C4.358 7 2 8.12 2 9.5S4.358 13 8.5 13h23c4.142 0 6.5-2.12 6.5-3.5S35.642 7 31.5 7H24V5h7.5C36.194 5 40 7.015 40 9.5v2c0 2.485-3.806 5.5-8.5 5.5h-23C3.806 17 0 13.985 0 11.5v-2z" />
    <path d="M18.938 5.5L22 2.437v6.126L18.937 5.5z" fill="#fff" />
  </svg>
);

export default SvgComponent;