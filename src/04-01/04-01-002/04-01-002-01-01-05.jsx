import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 2C26.06 2 33 8.94 33 17.5 33 26.06 26.06 33 17.5 33 8.94 33 2 26.06 2 17.5 2 8.94 8.94 2 17.5 2z" />
    <path d="M22.094 32.313a15.554 15.554 0 001.906-.75C22.712 29.445 20.298 28 17.5 28s-5.212 1.446-6.5 3.563c.613.284 1.253.546 1.906.75C13.885 30.934 15.563 30 17.5 30c1.937 0 3.615.935 4.594 2.313z" />
  </svg>
);

export default SvgComponent;