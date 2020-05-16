import React from "react";

const SvgComponent = (props) => (
  <svg width={17} height={30} {...props}>
    <path d="M0 17h15v13H0zM0 15V0h2v15H0zM15 8l1.406 1.406L10.813 15H8l7-7z" />
  </svg>
);

export default SvgComponent;
