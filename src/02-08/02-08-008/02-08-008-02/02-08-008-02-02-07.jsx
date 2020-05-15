import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M19 2h11.314L19 13.314V2zm1.016 1.016v7.867l7.867-7.867h-7.867z" />
    <path d="M2.03.586l16.263 16.263a4 4 0 005.657 0c1.171-1.171.222-4.02-2.122-6.364l5.657-5.657a8 8 0 010 11.314l-2.121 2.121a6 6 0 01-8.485 0L.615 2 2.03.586z" />
    <path d="M20.016 3.016h7.867l-7.867 7.867V3.016z" fill="#fff" />
  </svg>
);

export default SvgComponent;