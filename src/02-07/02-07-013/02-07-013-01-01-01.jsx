import React from "react";

const SvgComponent = (props) => (
  <svg width={28} height={23} {...props}>
    <path d="M28 12H0v1h28v-1zM7 10V0h10L7 10z" />
    <path d="M19 12.5c0-2.623-1.062-5-2.781-6.719l-2.5-2.5L13 4l2.5 2.5a8.458 8.458 0 012.5 6 8.458 8.458 0 01-2.5 6l-3.781 3.813.687.687 3.813-3.781A9.472 9.472 0 0019 12.5z" />
    <path
      d="M18 12.5a8.458 8.458 0 00-2.5-6L13 4l-2.125 2.125 2.5 2.5C14.37 9.62 15 10.981 15 12.5c0 1.519-.63 2.88-1.625 3.875l-3.781 3.813 2.125 2.125L15.5 18.5a8.458 8.458 0 002.5-6z"
      fill="#fff"
    />
    <path d="M15 12.5c0-1.519-.63-2.88-1.625-3.875l-2.5-2.5-.688.688 2.5 2.5A4.494 4.494 0 0114 12.5a4.494 4.494 0 01-1.313 3.188l-3.812 3.78.719.72 3.781-3.813C14.37 15.38 15 14.019 15 12.5z" />
    <path d="M16 8.5a4 4 0 100 8 4 4 0 000-8z" />
  </svg>
);

export default SvgComponent;
