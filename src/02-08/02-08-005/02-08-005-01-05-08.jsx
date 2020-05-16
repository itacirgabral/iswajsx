import React from "react";

const SvgComponent = (props) => (
  <svg width={22} height={17} {...props}>
    <path d="M21.95 8H17V3.05L21.95 8zm-1.68-.707L17.707 4.73v2.563h2.563z" />
    <path d="M19.475 1.282a3.5 3.5 0 01.331 4.575l-.729-.73c.64-.97.545-2.283-.31-3.137a2.5 2.5 0 00-3.535 0L8.515 8.707c-2.014 2.014-3.536 7.778-3.536 7.778l-4.95-4.95S5.794 10.015 7.808 8l6.717-6.718a3.5 3.5 0 014.95 0z" />
    <path d="M20.27 7.293h-2.563V4.73l2.563 2.563z" fill="#fff" />
  </svg>
);

export default SvgComponent;
