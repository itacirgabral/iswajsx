import React from "react";

const SvgComponent = (props) => (
  <svg width={35} height={35} {...props}>
    <path d="M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z" />
    <path d="M33.808 11.224c-.039-.1-.048-.209-.089-.309-.146-.36-.381-.687-.552-1.038-2.293 1.319-5.222 1.098-7.182-.862s-2.18-4.889-.862-7.182c-.351-.17-.678-.406-1.038-.552-.1-.04-.209-.05-.31-.089-1.573 2.85-1.268 6.466 1.15 8.883 2.417 2.418 6.032 2.723 8.883 1.15z" />
  </svg>
);

export default SvgComponent;
