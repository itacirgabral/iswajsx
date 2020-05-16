import React from "react";

const SvgComponent = (props) => (
  <svg width={20} height={22} {...props}>
    <path d="M7 3l3.5 3.5L14 3H7zm1.688.688h3.624L10.5 5.5 8.687 3.687z" />
    <path d="M13.5 0a3.5 3.5 0 00-3.469 3h1.031c.234-1.14 1.23-2 2.438-2A2.5 2.5 0 0116 3.5V13c0 2.848-3 8-3 8h7s-3-5.152-3-8V3.5A3.5 3.5 0 0013.5 0zM1 17l4.5 4.5L10 17H1zm1.688.688h5.624L5.5 20.5l-2.813-2.813zM3 0a3 3 0 013 3v10c0 1.49 2 4 2 4H3s2-2.51 2-4V3a2 2 0 10-4 0v4H0V3a3 3 0 013-3z" />
    <path
      d="M8.688 3.688L10.5 5.5l1.813-1.813H8.687zM2.688 17.688L5.5 20.5l2.813-2.813H2.686z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
