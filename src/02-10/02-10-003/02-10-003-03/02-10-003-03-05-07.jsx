import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M22.5 5.5L17 0v11l5.5-5.5zm-1.438 0L18 8.563V2.436L21.063 5.5z" />
    <path d="M40 9.5C40 7.015 36.194 5 31.5 5h-8v2h8C35.642 7 38 8.12 38 9.5S35.642 13 31.5 13h-23C4.358 13 2 10.88 2 9.5S4.358 7 8.5 7H16V5H8.5C3.806 5 0 7.015 0 9.5v2C0 13.985 3.806 17 8.5 17h23c4.694 0 8.5-3.015 8.5-5.5v-2z" />
    <path d="M21.063 5.5L18 2.437v6.126L21.063 5.5z" fill="#fff" />
  </svg>
);

export default SvgComponent;
