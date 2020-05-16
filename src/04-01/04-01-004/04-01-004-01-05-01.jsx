import React from "react";

const SvgComponent = (props) => (
  <svg width={36} height={45} {...props}>
    <path d="M20 0l-.719.719 1.813 1.812-1.813 1.813.719.687 2.531-2.5L20 0zM18 10C8.059 10 0 17.835 0 27.5S8.059 45 18 45s18-7.835 18-17.5S27.941 10 18 10zm0 2c8.837 0 16 6.94 16 15.5C34 36.06 26.837 43 18 43S2 36.06 2 27.5C2 18.94 9.163 12 18 12zM30.188 0L24 6.188l.719.687L30.875.687 30.187 0z" />
    <path
      d="M30.875.688l-6.156 6.187 1.406 1.438 6.188-6.188L30.875.687z"
      fill="#fff"
    />
    <path d="M32.313 2.125l-6.188 6.188.688.687L33 2.812l-.688-.687zM5.813 0l-.688.688 6.156 6.187.719-.688L5.812 0z" />
    <path
      d="M5.125.688L3.687 2.125l6.188 6.188 1.406-1.438L5.125.687z"
      fill="#fff"
    />
    <path d="M3.688 2.125L3 2.813 9.188 9l.687-.688-6.188-6.187zM13.5 2h7v1h-7zM16.031 4l.719.718-1.813 1.813 1.813 1.813-.719.687-2.531-2.5L16.031 4z" />
    <path d="M15.5 6h7v1h-7z" />
  </svg>
);

export default SvgComponent;
