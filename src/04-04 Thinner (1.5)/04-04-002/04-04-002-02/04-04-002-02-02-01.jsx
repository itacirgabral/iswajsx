import React from "react";

const SvgComponent = (props) => (
  <svg width={21} height={8} {...props}>
    <path d="M5.125 3.813L4 4.75C5.789 6.77 8.043 8 10.5 8s4.711-1.23 6.5-3.25l-1.125-.938C14.591 5.46 12.66 6.5 10.5 6.5S6.41 5.46 5.125 3.812zM17 8a4 4 0 100-8v1c1.38 0 2.5 1.343 2.5 3S18.38 7 17 7v1zM4 8V7C2.62 7 1.5 5.657 1.5 4S2.62 1 4 1V0a4 4 0 100 8z" />
  </svg>
);

export default SvgComponent;
