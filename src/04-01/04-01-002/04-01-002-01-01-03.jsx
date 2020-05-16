import React from "react";

const SvgComponent = (props) => (
  <svg width={35} height={35} {...props}>
    <path d="M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 2C26.06 2 33 8.94 33 17.5 33 26.06 26.06 33 17.5 33 8.94 33 2 26.06 2 17.5 2 8.94 8.94 2 17.5 2z" />
    <path d="M2.688 22.094c.203.653.465 1.293.75 1.906C5.553 22.712 7 20.298 7 17.5S5.554 12.288 3.437 11a15.554 15.554 0 00-.75 1.906C4.066 13.885 5 15.563 5 17.5c0 1.937-.935 3.615-2.312 4.594z" />
  </svg>
);

export default SvgComponent;
