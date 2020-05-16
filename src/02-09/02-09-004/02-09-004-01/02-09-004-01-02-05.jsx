import React from "react";

const SvgComponent = (props) => (
  <svg width={49} height={13} {...props}>
    <path d="M42 13l6.5-6.5L42 0v13zm1-2.438V2.438L47.094 6.5 43 10.563zM12 10a10.97 10.97 0 01-7.781-3.219L0 2.594l1.438-1.406 4.187 4.187C7.254 7.004 9.515 7 12 7s4.746.004 6.375-1.625l.844-1.156A10.97 10.97 0 0127 1a10.97 10.97 0 017.781 3.219l1 1c.181.18.443.281.719.281H42v2h-5.5a2.996 2.996 0 01-2.125-.875l-1-1A8.988 8.988 0 0027 3a8.988 8.988 0 00-6.375 2.625l-.844 1.156A10.97 10.97 0 0112 10z" />
    <path d="M43 10.563L47.094 6.5 43 2.437v8.126z" fill="#fff" />
  </svg>
);

export default SvgComponent;
