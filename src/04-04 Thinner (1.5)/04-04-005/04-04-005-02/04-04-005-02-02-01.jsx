import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M10.5 1C6.91 1 4 2.343 4 4s2.91 3 6.5 3S17 5.657 17 4s-2.91-3-6.5-3zm0 1.5c2.761 0 5 .672 5 1.5s-2.239 1.5-5 1.5-5-.672-5-1.5 2.239-1.5 5-1.5zM17 8a4 4 0 100-8v1c1.38 0 2.5 1.343 2.5 3S18.38 7 17 7v1zM4 8V7C2.62 7 1.5 5.657 1.5 4S2.62 1 4 1V0a4 4 0 100 8z" />
  </svg>
);

export default SvgComponent;