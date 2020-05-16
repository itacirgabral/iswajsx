import React from "react";

const SvgComponent = (props) => (
  <svg width={26} height={32} {...props}>
    <path d="M5 0v1.5h5c8.008 0 14.5 6.492 14.5 14.5S18.008 30.5 10 30.5H0V32h10c8.837 0 16-7.163 16-16S18.837 0 10 0H5z" />
    <path
      d="M5 1.5v4h5c5.799 0 10.5 4.701 10.5 10.5S15.799 26.5 10 26.5H0v4h10c8.008 0 14.5-6.492 14.5-14.5S18.008 1.5 10 1.5H5z"
      fill="#fff"
    />
    <path d="M5 5.5V7h5a9 9 0 110 18H0v1.5h10c5.799 0 10.5-4.701 10.5-10.5S15.799 5.5 10 5.5H5z" />
  </svg>
);

export default SvgComponent;
