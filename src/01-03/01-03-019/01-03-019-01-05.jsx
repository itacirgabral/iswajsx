import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 17h15v13H0z" />
    <path fill="#fff" d="M2 19h6v9H2z" />
    <path d="M13 15h2V0h-2v15zM5 6v5h2V8h2v7h2V6H5z" />
    <path d="M6 11l-1.406 1.406L7.187 15H10l-4-4zm3.188 6L15 22.813C16.015 23.994 16 25 16 25c0 1.145-.984 1.14-1 1.156V28c3 0 3-3 3-3 0-2.461-3-5-3-5l-3-3H9.187z" />
    <path d="M9.188 17L15 22.844V20l-3-3H9.187z" fill="#fff" />
  </svg>
);

export default SvgComponent;