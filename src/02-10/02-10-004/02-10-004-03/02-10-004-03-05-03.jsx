import React from "react";

const SvgComponent = (props) => (
  <svg width={40} height={17} {...props}>
    <path d="M14.5 5.5L20 0v11l-5.5-5.5zm1.438 0L19 8.563V2.436L15.937 5.5z" />
    <path d="M0 9.5C0 7.015 3.806 5 8.5 5h5v2h-5C4.358 7 2 8.12 2 9.5S4.358 13 8.5 13h23c4.142 0 6.5-2.12 6.5-3.5S35.642 7 31.5 7H27V5h4.5C36.194 5 40 7.015 40 9.5v2c0 2.485-3.806 5.5-8.5 5.5h-23C3.806 17 0 13.985 0 11.5v-2z" />
    <path d="M15.938 5.5L19 2.437v6.126L15.937 5.5z" fill="#fff" />
    <path d="M20.5 5.5L26 0v11l-5.5-5.5zm1.438 0L25 8.563V2.436L21.937 5.5z" />
    <path d="M21.938 5.5L25 2.437v6.126L21.937 5.5z" fill="#fff" />
  </svg>
);

export default SvgComponent;
