import React from "react";

const SvgComponent = (props) => (
  <svg width={12} height={6} {...props}>
    <path d="M12 0v5h-1V1H7V0h5zM5.75 3.875A4.006 4.006 0 008.594 2.72L7.875 2a3.009 3.009 0 01-4.25 0L2.219.594l-.719.687L2.906 2.72A4.006 4.006 0 005.75 3.875z" />
    <path d="M5.75 5.875A5.99 5.99 0 0010 4.125l-.719-.719a4.99 4.99 0 01-7.062 0L.813 2l-.72.719L1.5 4.125a5.99 5.99 0 004.25 1.75z" />
    <path
      d="M2.215 3.426a5 5 0 007.071 0L8.58 2.72a4 4 0 01-5.657 0L1.508 1.305l-.707.707 1.414 1.414z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
