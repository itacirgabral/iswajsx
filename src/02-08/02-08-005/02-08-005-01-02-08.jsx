import React from "react";

const SvgComponent = (props) => (
  <svg width={27} height={20} {...props}>
    <path d="M23.95 3.1a4 4 0 010 5.657l-.707.707-.707-.707.707-.707a3 3 0 000-4.242l-.707-.707c-1.172-1.172-3.388-.855-4.95.707l-6.364 6.364c-2.322 2.321-3.536 9.192-3.536 9.192l-7.07-7.071s6.87-1.214 9.192-3.536l6.364-6.364a5 5 0 017.07 0l.708.708z" />
    <path d="M26.778 13H19V5.222L26.778 13zm-2.43-1.016l-4.332-4.331v4.33h4.331zM21.121 18.657l-.707.707L2.03.979l.708-.707L21.12 18.657z" />
    <path d="M24.347 11.984h-4.33V7.653l4.33 4.33z" fill="#fff" />
  </svg>
);

export default SvgComponent;
