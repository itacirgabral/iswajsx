import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M12 0v28h1V0h-1zM10 21H0V11l10 10z" />
    <path d="M12.5 9c-2.623 0-5 1.062-6.719 2.781l-2.5 2.5L4 15l2.5-2.5a8.458 8.458 0 016-2.5c2.347 0 4.462.962 6 2.5l3.813 3.781.687-.687-3.781-3.813A9.472 9.472 0 0012.5 9z" />
    <path
      d="M12.5 10a8.458 8.458 0 00-6 2.5L4 15l2.125 2.125 2.5-2.5C9.62 13.63 10.981 13 12.5 13c1.519 0 2.88.63 3.875 1.625l3.813 3.781 2.125-2.125L18.5 12.5a8.458 8.458 0 00-6-2.5z"
      fill="#fff"
    />
    <path d="M12.5 13c-1.519 0-2.88.63-3.875 1.625l-2.5 2.5.688.688 2.5-2.5A4.494 4.494 0 0112.5 14c1.243 0 2.373.498 3.188 1.313l3.78 3.812.72-.719-3.813-3.781C15.38 13.63 14.019 13 12.5 13z" />
  </svg>
);

export default SvgComponent;
