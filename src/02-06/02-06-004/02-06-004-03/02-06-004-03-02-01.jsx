import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 0v12L12 0H0zm1 1h8.563L1 9.594V1z" />
    <path d="M4.54 7.406L3.477 8.47l4.625 4.594a2.971 2.971 0 010 4.218L.321 25.063l7.781 7.78a3.009 3.009 0 010 4.25L1.196 44h2.125l5.844-5.844a4.513 4.513 0 000-6.375l-6.719-6.718 6.719-6.72a4.476 4.476 0 000-6.343L4.54 7.406z" />
    <path
      d="M7.415 4.531L4.54 7.406 9.165 12a4.476 4.476 0 010 6.344l-6.719 6.718 6.719 6.72a4.513 4.513 0 010 6.374L3.32 44h5.656l3.031-3.031a8.475 8.475 0 000-12l-3.906-3.875 3.906-3.907c3.32-3.319 3.32-8.711 0-12.03L7.415 4.53z"
      fill="#fff"
    />
    <path d="M8.477 3.469L7.415 4.53l4.593 4.625c3.32 3.32 3.32 8.712 0 12.031l-3.906 3.907 3.906 3.875a8.475 8.475 0 010 12L8.979 44h2.124l1.969-1.969a9.98 9.98 0 000-14.125l-2.844-2.812 2.844-2.844c3.905-3.905 3.905-10.251 0-14.156L8.477 3.469z" />
    <path d="M1 1v8.594L9.563 1H1z" fill="#fff" />
  </svg>
);

export default SvgComponent;