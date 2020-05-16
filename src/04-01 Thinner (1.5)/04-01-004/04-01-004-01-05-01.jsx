import React from "react";

const SvgComponent = (props) => (
  <svg width={35} height={45} {...props}>
    <path d="M19.5 0l-.719.719 1.813 1.812-1.813 1.813.719.687 2.531-2.5L19.5 0zM30.188 0L24 6.188l.719.687L30.875.687 30.187 0z" />
    <path
      d="M30.875.688l-6.156 6.187 1.406 1.438 6.188-6.188L30.875.687z"
      fill="#fff"
    />
    <path d="M32.313 2.125l-6.188 6.188.688.687L33 2.812l-.688-.687zM4.813 0l-.688.688 6.156 6.187.719-.688L4.812 0z" />
    <path
      d="M4.125.688L2.687 2.125l6.188 6.188 1.406-1.438L4.125.687z"
      fill="#fff"
    />
    <path d="M2.688 2.125L2 2.813 8.188 9l.687-.688-6.188-6.187zM13 2h7v1h-7zM15.531 4l.719.718-1.813 1.813 1.813 1.813-.719.687L13 6.531 15.531 4z" />
    <path d="M15 6h7v1h-7zM17.5 10C7.835 10 0 17.835 0 27.5S7.835 45 17.5 45 35 37.165 35 27.5 27.165 10 17.5 10zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z" />
  </svg>
);

export default SvgComponent;
