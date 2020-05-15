import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 12h28v1H0v-1zM11 0h10v10l-1.5-1.5v-7h-7L11 0z" />
    <path d="M9 12.5c0-2.623 1.062-5 2.781-6.719l2.5-2.5L15 4l-2.5 2.5a8.458 8.458 0 00-2.5 6c0 2.347.962 4.462 2.5 6l3.781 3.813-.687.687-3.813-3.781A9.472 9.472 0 019 12.5z" />
    <path
      d="M10 12.5c0-2.347.962-4.462 2.5-6L15 4l2.125 2.125-2.5 2.5C13.63 9.62 13 10.981 13 12.5c0 1.519.63 2.88 1.625 3.875l3.781 3.813-2.125 2.125L12.5 18.5a8.458 8.458 0 01-2.5-6z"
      fill="#fff"
    />
    <path d="M13 12.5c0-1.519.63-2.88 1.625-3.875l2.5-2.5.688.688-2.5 2.5A4.494 4.494 0 0014 12.5c0 1.243.498 2.373 1.313 3.188l3.812 3.78-.719.72-3.781-3.813C13.63 15.38 13 14.019 13 12.5z" />
    <path d="M12 8.5a4 4 0 110 8 4 4 0 010-8z" />
  </svg>
);

export default SvgComponent;