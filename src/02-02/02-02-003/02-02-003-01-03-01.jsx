import React from "react";

const SvgComponent = (props) => (
  <svg width={23} height={36} {...props}>
    <path d="M10 0v7h1V1h6V0h-7z" />
    <path d="M13.719 3L13 3.719l3 2.969c6.053 6.053 6.053 15.884 0 21.937-4.326 4.326-10.573 5.545-16 3.688v1.03c5.692 1.827 12.165.492 16.688-4.03 6.443-6.444 6.443-16.87 0-23.313l-2.97-3z" />
    <path d="M19 7a3 3 0 100 6 3 3 0 000-6zM20 19a3 3 0 100 6 3 3 0 000-6zM14 28a3 3 0 100 6 3 3 0 000-6zM3 30a3 3 0 100 6 3 3 0 000-6z" />
  </svg>
);

export default SvgComponent;
