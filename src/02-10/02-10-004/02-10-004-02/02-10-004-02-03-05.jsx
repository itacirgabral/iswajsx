import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={32} {...props}>
    <path d="M4 16h2l3.5 3.5L13 16h2l-5.5 5.5L4 16z" />
    <path d="M5 32c-2.761 0-5-5.373-5-12v-9C0 4.925 2.015 0 4.5 0h2c2.448 0 4.505 3.775 5.219 9H6.656C6.225 4.824 5.424 2 4.5 2 3.12 2 2 8.268 2 16s1.12 14 2.5 14c.96 0 1.773-3.047 2.188-7.5h5.156C11.172 27.929 8.366 32 5 32z" />
    <path d="M4 10h2l3.5 3.5L13 10h2l-5.5 5.5L4 10z" />
  </svg>
);

export default SvgComponent;
