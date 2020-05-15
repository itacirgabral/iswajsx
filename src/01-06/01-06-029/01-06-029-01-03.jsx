import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M15 15v15h8V15h-8z" />
    <path d="M28 8l-5.156 5.156L21 15h2v.813l.813-.813.437-.406v-.031l5.156-5.157L28 8zM0 15h15v3H0zM15 0h2v15h-2zM2 28h13v2H2z" />
  </svg>
);

export default SvgComponent;