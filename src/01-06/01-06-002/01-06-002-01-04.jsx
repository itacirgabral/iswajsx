import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M9 14a8 8 0 100 16 8 8 0 000-16z" />
    <path d="M9 16a6 6 0 100 12 6 6 0 000-12z" fill="#fff" />
    <path d="M16.594 6.406l-5.782 5.782c.752.138 1.505.328 2.188.624l5-5-1.406-1.406zM8 0v12.063c.326-.033.665-.063 1-.063.335 0 .674.03 1 .063V0H8zM1.406 6.406L0 7.813l5 5c.683-.297 1.436-.487 2.188-.626l-5.782-5.78z" />
  </svg>
);

export default SvgComponent;