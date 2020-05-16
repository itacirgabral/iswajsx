import React from "react";

const SvgComponent = (props) => (
  <svg width={20} height={22} {...props}>
    <path d="M13 3L9.5 6.5 6 3h7zm-1.688.688H7.688L9.5 5.5l1.813-1.813z" />
    <path d="M6.5 0a3.5 3.5 0 013.469 3H8.938C8.704 1.86 7.707 1 6.5 1A2.5 2.5 0 004 3.5V13c0 2.848 3 8 3 8H0s3-5.152 3-8V3.5A3.5 3.5 0 016.5 0zM19 17l-4.5 4.5L10 17h9zm-1.688.688h-5.625L14.5 20.5l2.813-2.813zM17 0a3 3 0 00-3 3v10c0 1.49-2 4-2 4h5s-2-2.51-2-4V3a2 2 0 114 0v4h1V3a3 3 0 00-3-3z" />
    <path
      d="M11.313 3.688L9.5 5.5 7.687 3.687h3.625zM17.313 17.688L14.5 20.5l-2.813-2.813h5.626z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
