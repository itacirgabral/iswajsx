import React from "react";

const SvgComponent = (props) => (
  <svg width={10} height={42} {...props}>
    <path d="M6 0v5c0 .568-.244 1.073-.625 1.438l-1.156.78A10.97 10.97 0 001 15a10.97 10.97 0 003.219 7.781l1.156.844C7.004 25.254 7 27.515 7 30s-.715 4.028-2.344 5.656L.438 39.875 2.562 42l4.22-4.219A10.97 10.97 0 0010 30a10.97 10.97 0 00-3.219-7.781l-1.156-.844A8.988 8.988 0 013 15c0-2.485.996-4.746 2.625-6.375l.656-.781C6.734 7.12 7 6.104 7 5V0H6z" />
  </svg>
);

export default SvgComponent;
