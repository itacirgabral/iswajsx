import React from "react";

const SvgComponent = (props) => (
  <svg width={23} height={38} {...props}>
    <path d="M8 21l-8 8h16l-8-8zm0 1.406L13.563 28H2.437L8 22.406z" />
    <path d="M21 0v12.75a4.443 4.443 0 00-2.5-.75 4.5 4.5 0 000 9c.928 0 1.788-.27 2.5-.75V32a4 4 0 01-4 4c-2.761 0-5-3.134-5-7H4a9 9 0 009 9h4a6 6 0 006-6V0h-2zm-2.5 14a2.5 2.5 0 110 5 2.5 2.5 0 010-5z" />
    <path d="M8 22.406L2.437 28h11.126L8 22.406z" fill="#fff" />
  </svg>
);

export default SvgComponent;
