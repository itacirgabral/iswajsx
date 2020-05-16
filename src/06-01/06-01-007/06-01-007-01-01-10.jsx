import React from "react";

const SvgComponent = (props) => (
  <svg width={26} height={36} {...props}>
    <path
      d="M3 0v1.125C1.77 1.402.722 2.182 0 3.25V6.5C0 4.015 1.79 2 4 2V0H3zM0 6.5v3.25c.722 1.068 1.77 1.848 3 2.125v2.469L1.469 17l8.75 15.156C9.518 31.613 8.825 31 8 31H7c-1.49 0-2.51 2-4 2H1v1h2c1.49 0 2.51-2 4-2h1c1.49 0 2.51 2 4 2v-1L2.656 17 9 6V3h17V2H8v3.719L6 9.187V0H5v10.906l-1 1.719V11c-2.21 0-4-2.015-4-4.5zm4-3c-1.38 0-2.5 1.343-2.5 3s1.12 3 2.5 3v-6zM11.313 6L4.936 17 14 32.688V36h1v-3.594L6.125 17l5.781-10H26V6H11.312zM7 34c-1.49 0-2.51 2-4 2h2c.627-.5 1.255-1 2-1h1c.745 0 1.373.5 2 1h2c-1.49 0-2.51-2-4-2H7z"
      fill="#fff"
    />
    <path d="M9 3v3L2.656 17 12 33.219V34c-1.49 0-2.51-2-4-2H7c-1.49 0-2.51 2-4 2H1v2h2c1.49 0 2.51-2 4-2h1c1.49 0 2.51 2 4 2h2v-3.313L4.937 17l6.375-11H26V3H9z" />
    <path d="M4 0v2C1.79 2 0 4.015 0 6.5S1.79 11 4 11v2h1V0H4zm0 3.5v6c-1.38 0-2.5-1.343-2.5-3s1.12-3 2.5-3z" />
  </svg>
);

export default SvgComponent;
