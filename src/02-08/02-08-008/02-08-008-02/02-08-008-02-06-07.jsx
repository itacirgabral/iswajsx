import React from "react";

const SvgComponent = (props) => (
  <svg width={24} height={19} {...props}>
    <path d="M14 0h9.192l-1.414 1.414h-6.364v6.364L14 9.192V0z" />
    <path d="M1.272 6.364l8.485 8.485c1.953 1.953 5.435 1.636 7.779-.707 1.562-1.562.928-4.728-1.415-7.07l4.95-4.95a9 9 0 010 12.727l-1.414 1.414c-2.734 2.734-7.483 2.418-10.607-.707L.565 7.071l.707-.707z" />
  </svg>
);

export default SvgComponent;
