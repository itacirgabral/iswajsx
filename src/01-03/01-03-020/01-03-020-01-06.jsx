import React from "react";

const SvgComponent = (props) => (
  <svg width={21} height={30} {...props}>
    <path d="M6 17h15v13H6zM3 6v7h2V8h2v7h2V6H3zM14 0h-2v15h2V0z" />
    <path d="M2.25 8.219L.312 8.75 5 26.25V18.5L2.25 8.219z" />
  </svg>
);

export default SvgComponent;
