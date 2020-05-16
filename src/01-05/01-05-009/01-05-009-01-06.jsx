import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={25} {...props}>
    <path d="M8 25V1s7 0 7 7v9c0 8-7 8-7 8zM0 0v2h4c.778 0 1.445.107 2 .313v-2C4.875.005 4 0 4 0H0zM0 5v2h4s.938.014 2 .344V5.312C4.88 5.05 4 5 4 5H0zM0 10v2h4s.94.025 2 .438v-2.126C4.875 10.005 4 10 4 10H0zM0 15v2h4s.94.025 2 .438v-2.125C4.875 15.005 4 15 4 15H0zM6 22.563C4.94 22.974 4 23 4 23H0v2h4s.875-.005 2-.313v-2.125z" />
  </svg>
);

export default SvgComponent;
