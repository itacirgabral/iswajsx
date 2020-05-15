import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M24 0v29L7.75 12.75l1.406-1.438L22 24.188V5H0V0h24z" />
    <path
      d="M25 0v29h6v1H18v1h2c0 2.21 2.015 4 4.5 4h-3.25c-1.068-.722-1.848-1.77-2.125-3H17v-3h5.563L6.313 12.75l2.843-2.844L21 21.75V6H0V5h22v19.156L9.156 11.313 7.75 12.75 24 29V0h1zm-.5 35c2.485 0 4.5-1.79 4.5-4h2v1h-1.125c-.277 1.23-1.057 2.278-2.125 3H24.5zm3-4c0 1.38-1.343 2.5-3 2.5s-3-1.12-3-2.5h6z"
      fill="#fff"
    />
    <path d="M31 31h-2c0 2.21-2.015 4-4.5 4S20 33.21 20 31h-2v-1h13v1zm-3.5 0h-6c0 1.38 1.343 2.5 3 2.5s3-1.12 3-2.5z" />
  </svg>
);

export default SvgComponent;
