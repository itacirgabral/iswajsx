import React from "react";

const SvgComponent = (props) => (
  <svg width={17} height={27} {...props}>
    <path d="M9 11c-4.416 0-8 3.584-8 8s3.584 8 8 8 8-3.584 8-8-3.584-8-8-8z" />
    <path d="M9 13c-3.312 0-6 2.688-6 6s2.688 6 6 6V13z" fill="#fff" />
    <path d="M1.406.125L0 1.563 11.438 13h2.812L1.406.125z" />
  </svg>
);

export default SvgComponent;
