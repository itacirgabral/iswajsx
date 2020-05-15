import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M13 7v23h1V7h-1zM4 7l7-7 7 7h-2.844L11 2.844 6.844 7H4zM8 7v23h1V7H8zM0 21.781V14h7.781l-1 1H1v5.781l-1 1z" />
    <path d="M9 7v23h4V7H9z" fill="#fff" />
    <path d="M19.813 16.125l-1.438 1.406c-1.772 1.436-4.49 1.938-7.063 1.938-2.571 0-5.29-.502-7.062-1.938l-.719.719a10.97 10.97 0 007.781 3.219 10.97 10.97 0 007.782-3.219l1.406-1.406-.688-.719z" />
  </svg>
);

export default SvgComponent;