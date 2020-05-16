import React from "react";

const SvgComponent = (props) => (
  <svg width={23} height={40} {...props}>
    <path d="M0 8l7 7 7-7H0zm2.438 1h9.124L7 13.563 2.437 9z" />
    <path d="M11 0a5 5 0 00-5 5v3h2V5a3 3 0 013-3h1a4 4 0 014 4v6.563A3.99 3.99 0 0014 12a4 4 0 100 8c.73 0 1.41-.221 2-.563v3.125A3.99 3.99 0 0014 22a4 4 0 100 8 4 4 0 001.969-.531C15.622 33.545 11 40 11 40h12s-5-6.972-5-11V6a6 6 0 00-6-6h-1zm3 14a2 2 0 110 4 2 2 0 010-4zm0 10a2 2 0 110 4 2 2 0 010-4z" />
    <path d="M2.438 9L7 13.563 11.563 9H2.437z" fill="#fff" />
  </svg>
);

export default SvgComponent;
