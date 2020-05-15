import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M9 0v20c8 0 8-8 8-8V8c0-8-8-8-8-8z" />
    <path
      d="M10 1.125v17.813c1.242-.135 2.22-.518 3-1.032V2.156c-1.075-.638-2.22-.913-3-1.031z"
      fill="#fff"
    />
    <path d="M9 4V0C0 0 0 8 0 8h2c0-4 7-4 7-4zM21.656 7.5l-.281.313-4.406 4.406a8.791 8.791 0 01-1.125 3.625L16 16l.781-.781 6.282-6.281L22.125 8l-.469-.5z" />
  </svg>
);

export default SvgComponent;
