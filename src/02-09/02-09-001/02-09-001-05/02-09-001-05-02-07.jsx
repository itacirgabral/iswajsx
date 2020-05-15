import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M7 0L0 7l7 7V0zM6 2.438v9.124L1.406 7 6 2.437zM7 6v2h28a6 6 0 016 6c0 2.21-2.686 4-6 4H25v4h10a8 8 0 100-16H7z" />
    <path d="M6 2.438L1.406 7 6 11.563V2.437z" fill="#fff" />
  </svg>
);

export default SvgComponent;
