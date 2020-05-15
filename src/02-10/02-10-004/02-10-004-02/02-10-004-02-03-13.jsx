import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M11 16H9l-3.5 3.5L2 16H0l5.5 5.5L11 16z" />
    <path d="M10 32c2.761 0 5-5.373 5-12v-9c0-6.075-2.015-11-4.5-11h-2C6.052 0 3.995 3.775 3.281 9h5.063c.431-4.176 1.232-7 2.156-7C11.88 2 13 8.268 13 16s-1.12 14-2.5 14c-.96 0-1.773-3.047-2.188-7.5H3.157C3.828 27.929 6.634 32 10 32z" />
    <path d="M11 10H9l-3.5 3.5L2 10H0l5.5 5.5L11 10z" />
  </svg>
);

export default SvgComponent;