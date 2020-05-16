import React from "react";

const SvgComponent = (props) => (
  <svg width={24} height={31} {...props}>
    <path d="M0 0v31L24 7l-1.406-1.406L2 26.187V0H0z" />
    <path d="M6 0v16.5L19.75 2.75l-1.406-1.406L8 11.688V0H6z" />
    <path d="M2 0v26.188L22.594 5.593 19.75 2.75 6 16.5V0H2z" fill="#fff" />
  </svg>
);

export default SvgComponent;
