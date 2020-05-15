import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 15h15v15H0z" />
    <path fill="#fff" d="M2 17h6v11H2z" />
    <path d="M13 15h2V0h-2v15zM5 6v5h2V8h2v7h2V6H5z" />
    <path d="M6 11l-1.406 1.406L15 22.812C16.015 23.994 16 25 16 25c0 1.145-.984 1.14-1 1.156V28c3 0 3-3 3-3 0-2.461-3-5-3-5l-9-9z" />
    <path d="M7.188 15L15 22.844V20l-5-5H7.187z" fill="#fff" />
  </svg>
);

export default SvgComponent;
