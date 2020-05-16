import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={32} {...props}>
    <path d="M9.5 10.5L4 16h11l-5.5-5.5z" />
    <path d="M5 0C2.239 0 0 5.373 0 12v9c0 6.075 2.015 11 4.5 11h2c2.448 0 4.505-3.775 5.219-9H6.656c-.431 4.176-1.232 7-2.156 7C3.12 30 2 23.732 2 16S3.12 2 4.5 2c.96 0 1.773 3.047 2.188 7.5h5.156C11.172 4.071 8.366 0 5 0z" />
    <path d="M9.5 16.5L4 22h11l-5.5-5.5z" />
  </svg>
);

export default SvgComponent;
