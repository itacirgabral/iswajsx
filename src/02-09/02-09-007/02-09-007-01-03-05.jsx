import React from "react";

const SvgComponent = (props) => (
  <svg width={23} height={28} {...props}>
    <path d="M23 4v8l-1.5-1.5v-5h-5L15 4h8zM13 0h1v28h-1V0z" />
    <path d="M10 0h3v28h-3V0z" fill="#fff" />
    <path d="M9 0h1v28H9V0z" />
    <path d="M3.063 6L2 7.063 5.5 10.5c1.541 1.532 3.656 2.5 6 2.5a8.45 8.45 0 006-2.5l2.031-1.969L18.47 7.47 17.937 8c-1.585 1.584-4.027 2-6.437 2s-4.852-.415-6.438-2l-2-2zM0 15v8l1.5-1.5v-5h5L8 15H0z" />
    <path d="M19.938 17L21 18.063 17.5 21.5c-1.541 1.532-3.656 2.5-6 2.5a8.45 8.45 0 01-6-2.5l-2.031-1.969L4.53 18.47l.532.531c1.585 1.584 4.027 2 6.437 2s4.852-.415 6.438-2l2-2z" />
  </svg>
);

export default SvgComponent;
