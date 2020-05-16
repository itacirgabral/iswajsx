import React from "react";

const SvgComponent = (props) => (
  <svg width={22} height={11} {...props}>
    <path d="M19 0v5h-1V1h-4V0h5z" />
    <path d="M17.95 3.172L15.122 6l-.708-.707 2.83-2.829.706.708zM16.536 1.757l-2.829 2.829L13 3.879 15.83 1.05l.707.707zM16 11V6h1v4h4v1h-5z" />
    <path d="M17.05 7.828L19.88 5l.707.707-2.829 2.829-.707-.708zM18.464 9.243l2.83-2.829.706.707-2.828 2.829-.708-.707zM6 0v5H5V1H1V0h5z" />
    <path d="M4.95 3.172L2.122 6l-.707-.707 2.828-2.829.707.708zM3.536 1.757L.707 4.586 0 3.879 2.83 1.05l.707.707zM3 11V6h1v4h4v1H3z" />
    <path d="M4.05 7.828L6.88 5l.707.707-2.829 2.829-.707-.708zM5.465 9.243l2.828-2.829.707.707L6.172 9.95l-.707-.707z" />
  </svg>
);

export default SvgComponent;
