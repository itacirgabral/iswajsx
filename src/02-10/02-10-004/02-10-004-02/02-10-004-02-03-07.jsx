import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M16 4v2l3.5 3.5L16 13v2l5.5-5.5L16 4z" />
    <path d="M32 5c0-2.761-5.373-5-12-5h-9C4.925 0 0 2.015 0 4.5v2c0 2.448 3.775 4.505 9 5.219V6.656C4.824 6.225 2 5.424 2 4.5 2 3.12 8.268 2 16 2s14 1.12 14 2.5c0 .96-3.047 1.773-7.5 2.188v5.156C27.929 11.172 32 8.366 32 5z" />
    <path d="M10 4v2l3.5 3.5L10 13v2l5.5-5.5L10 4z" />
  </svg>
);

export default SvgComponent;