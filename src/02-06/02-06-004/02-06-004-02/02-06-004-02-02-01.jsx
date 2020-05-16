import React from "react";

const SvgComponent = (props) => (
  <svg width={14} height={41} {...props}>
    <path d="M0 0v12L12 0H0zm1 1h8.563L1 9.594V1zM8.478 3.531L7.415 4.594l2.594 2.593c3.32 3.32 3.32 8.712 0 12.032L7.79 21.437l2.219 2.25a8.475 8.475 0 010 12l-4.25 4.25L6.822 41l4.25-4.25a9.98 9.98 0 000-14.125l-1.157-1.188 1.157-1.156c3.905-3.905 3.905-10.25 0-14.156L8.478 3.531z" />
    <path d="M4.572 7.438L3.54 8.467l2.594 2.595a3.009 3.009 0 010 4.25L.009 21.436l6.125 6.125a3.009 3.009 0 010 4.25l-4.25 4.25 1.063 1.063 4.25-4.25a4.513 4.513 0 000-6.375l-5.063-5.063 5.063-5.062a4.476 4.476 0 000-6.344L4.572 7.437z" />
    <path
      d="M7.415 4.594L4.572 7.437l2.625 2.594a4.476 4.476 0 010 6.344l-5.063 5.063L7.197 26.5a4.513 4.513 0 010 6.375l-4.25 4.25 2.812 2.813 4.25-4.25a8.475 8.475 0 000-12l-2.219-2.25 2.219-2.22c3.32-3.319 3.32-8.711 0-12.03L7.415 4.594zM1 1v8.594L9.563 1H1z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
